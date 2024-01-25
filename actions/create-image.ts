
import { HEADERS, BING_URL,BING_IMAGE_COOKIE } from "./config";
import axios from "axios";

const createSession = () => {
    const session = axios.create({
      headers: {
        cookie: BING_IMAGE_COOKIE,
        ...HEADERS,
      },
    });
  
    return session;
  };

export const getImages = async (prompt:string) => {
    const encodedPrompt = encodeURIComponent(prompt);
    const url = `${BING_URL}/images/create?q=${encodedPrompt}&rt=3&FORM=GENCRE`;

    const { redirectUrl, requestId } = await fetchRedirectUrl(url)
    fetchFinalResult(encodedPrompt,redirectUrl,requestId)
}

const fetchFinalResult = async (prompt:string, redirectUrl:string,requestId:string) => {
    const session = createSession();
    await session.get(redirectUrl);
    const getResultUrl = `${BING_URL}/images/create/async/results/${requestId}?q=${prompt}`;

    console.log("Waiting for results...");
    const startWait = performance.now();

    let imagesResponse;

    while (true) {
        if (performance.now() - startWait > 300000) {
          throw new Error("Timeout error");
        }
        console.log(".", { end: "", flush: true });
        imagesResponse = await session.get(getResultUrl);
        console.log(imagesResponse)
        if (imagesResponse.status !== 200) {
          throw new Error("Could not get results");
        }
        if (imagesResponse.data === "" || imagesResponse.data.errorMessage) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          continue;
        } else {
          break;
        }
      }

      console.log(imagesResponse.data)
      return

      const imageLinks = imagesResponse.data
      .match(/src="([^"]+)"/g)
      .map((src: string) => src.slice(5, -1));

      const normalImageLinks: string[] = Array.from(
        new Set(imageLinks.map((link: string) => link.split("?w=")[0]))
      );
    
      const badImages = [
        "https://r.bing.com/rp/in-2zU3AJUdkgFe7ZKv19yPBHVs.png",
        "https://r.bing.com/rp/TX9QuO3WzcCJz1uaaSwQAz39Kb0.jpg",
      ];
    
      for (const im of normalImageLinks) {
        if (badImages.includes(im)) {
          throw new Error("Bad images");
        }
      }
    
      if (normalImageLinks.length === 0) {
        throw new Error("No images");
      }
    
      console.log(normalImageLinks)
}

const fetchRedirectUrl = async(url: string) => {
    const session = createSession();
    const response = await session.post(url, {
        maxRedirects: 0,
        validateStatus: function (status: number) {
          return status >= 200 && status < 303;
        },
        timeout: 200000,
      });

    let redirectUrl;

    if (response.status == 200) {
        redirectUrl = response.request.res.responseUrl.replace("&nfy=1", "");
      } else if (response.status !== 302) {
        console.error(
          `ERROR: the status is ${response.status} instead of 302 or 200`
        );
        throw new Error("Redirect failed");
      }

    const requestId = redirectUrl.split("id=")[1];
    
    return {
        redirectUrl, requestId 
    }
}