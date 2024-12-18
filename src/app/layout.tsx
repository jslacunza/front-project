import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/organisms/Header/Header";
import { Footer } from "@/components/organisms/Footer/Footer";
import "./globals.css";
import { Breadcrum } from "@/components/molecules/Breadcrum/Breadcrum";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apply Digital Test",
  description: "Frontend development test for Apply Digital",
};

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen w-screen flex-col items-center overflow-x-hidden`}>
        <Header />
        <Breadcrum />
        <main className='grow w-full w-full max-w-screen-xl bg-red'>
          <div className='flex gap-12 w-full flex-col py-12'>
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
