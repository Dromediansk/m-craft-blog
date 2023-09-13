import { ReactElement } from "react";
import { IconType } from "react-icons";
import { BsLinkedin, BsGithub, BsMailbox, BsFacebook } from "react-icons/bs";

export type SocialLinkT = {
  name: string;
  url: string;
  icon: ReactElement<IconType>;
  username: string;
};

export const socialLinks: SocialLinkT[] = [
  {
    name: "Github",
    username: "Dromediansk",
    icon: <BsGithub size={40} />,
    url: "https://github.com/Dromediansk",
  },
  {
    name: "LinkedIn",
    username: "miroslav.pillar",
    icon: <BsLinkedin size={40} />,
    url: "https://www.linkedin.com/in/miroslavpillar/",
  },
  {
    name: "Facebook",
    username: "miroslav.pillar",
    icon: <BsFacebook size={40} />,
    url: "https://www.facebook.com/miroslav.pillar/",
  },
  {
    name: "E-mail",
    username: "pillar.mr@gmail.com",
    icon: <BsMailbox size={40} />,
    url: "mailto:pillar.mr@gmail.com",
  },
];
