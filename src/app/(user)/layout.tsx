import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { FC, ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "M-Craft Blog",
  description:
    "Software development | Mobile development | Latest trends in tech",
  icons: "./M_logo.svg",
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-2 grid grid-cols-1 divide-y divide-blue-100 min-h-screen">
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
};

export default Layout;
