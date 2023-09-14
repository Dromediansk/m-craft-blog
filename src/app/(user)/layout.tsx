import { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M-craft blog",
  description:
    "Software development | Mobile development | Latest trends in tech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="container mx-auto p-2 grid grid-cols-1 divide-y divide-blue-100 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
