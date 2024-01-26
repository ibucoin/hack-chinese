import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HACK CHINESE WORDS",
  description: "Hack Chinese Words, help you learn chinese quick and easy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
