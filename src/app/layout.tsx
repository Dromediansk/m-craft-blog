import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import GoogleAnalytics from "../components/GoogleAnalytics";
import { draftMode } from "next/headers";
import LiveVisualEditing from "@/components/LiveVisualEditing";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M-Craft Blog",
  description:
    "Software development | Mobile development | Latest trends in tech",
  icons: "./Bitloom_pure.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <GoogleAnalytics />
          {children}
          {draftMode().isEnabled && <LiveVisualEditing />}
        </body>
      </html>
    </>
  );
}
