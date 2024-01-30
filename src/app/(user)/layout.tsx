import { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { FC, ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M-Craft Blog",
  description:
    "Software development | Mobile development | Latest trends in tech",
  icons: "./M_logo.svg",
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="container mx-auto p-2 grid grid-cols-1 divide-y divide-blue-100 min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
};

export default RootLayout;
