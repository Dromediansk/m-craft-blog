import { Metadata } from "next";

export const metadata: Metadata = {
  title: "M-craft blog Studio",
  description:
    "Software development | Mobile development | Latest trends in tech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
