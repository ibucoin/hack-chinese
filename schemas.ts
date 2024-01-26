import * as z from "zod";

export const isChineseWords = (str: string): boolean => {
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const charCode = char.charCodeAt(0);
    if (charCode < 19968 || charCode > 40959) {
      return false;
    }
  }
  return true;
};

export const WordsSchema = z.object({
  words: z
    .string()
    .min(1)
    .max(25)
    .refine(isChineseWords, "Please enter Chinese words"),
});
