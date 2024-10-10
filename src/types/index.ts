import { IconType } from "react-icons";

export type ButtonProps = {
  text: string;
  onClick: () => void;
  fill: boolean;
};

export type LogoProps = {
  half?: boolean;
};

export interface SocialIcon {
  link: string;
  icon: IconType;
}
export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}