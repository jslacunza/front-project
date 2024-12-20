import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Header } from "@/components/organisms/Header/Header";
import { Footer } from "@/components/organisms/Footer/Footer";
import "./globals.css";
import { Breadcrum } from "@/components/molecules/Breadcrum/Breadcrum";

const archivo = Archivo({ subsets: ["latin"], weight: ['400', '500', '700']});

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
      <body className={`${archivo.className} flex min-h-screen w-screen flex-col items-center overflow-x-hidden`}>
        <Header />
        <Breadcrum />
        <main className='grow w-full max-w-screen-xl bg-red'>
          <div className='flex gap-12 w-full flex-col py-12 lg:px-0 px-4'>
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
