import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "HACK CHINESE WORDS",
  description: "Hack Chinese Words, help you learn chinese quick and easy.",
  openGraph:{
    title:"HACK CHINESE WORDS",
    description:"Hack Chinese Words, help you learn chinese quick and easy.",
    url:"",
    siteName:"HACK CHINESE WORDS",
    type:"website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <script defer data-domain="hack-chinese.ibucoin.top" src="https://plausible.io/js/script.js"></script>
      <body className="inter.className">
        <div className="fixed h-screen w-full bg-gradient-to-r from-indigo-50 via-white to-cyan-100" />
        <Header />
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
