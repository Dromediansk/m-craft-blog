import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "M-Craft Blog Studio",
  description:
    "Software development | Mobile development | Latest trends in tech",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
