import { Metadata } from "next";
import { FC, ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Bitloom Blog Studio",
  description:
    "Software development | Mobile development | Latest trends in tech",
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default RootLayout;
