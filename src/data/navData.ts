import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { FooterColumn, SocialIcon } from "../types";

export const navigationData: string[] = ["Home", "Browse", "Pricing"];

export const socialIcons: SocialIcon[] = [
  {
    link: "https://www.twitter.com/",
    icon: FaTwitter,
  },
  {
    link: "https://www.linkedin.com/",
    icon: FaLinkedin,
  },
  {
    link: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    link: "https://www.facebook.com/",
    icon: FaFacebook,
  },
  {
    link: "https://www.youtube.com/",
    icon: FaYoutube,
  },
];

export const footerLinks: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { name: "Become a contributor", href: "#become" },
      { name: "Terms and Conditions", href: "#terms" },
      { name: "Privacy policy", href: "#privacy" },
    ],
  },
  {
    title: "Pricing and Plans",
    links: [
      { name: "Individual Plan", href: "#individual" },
      { name: "Company Plan", href: "#company" },
      { name: "Subscriptions", href: "#subscription" },
    ],
  },
  {
    title: "Customer Support",
    links: [
      { name: "Contact Us", href: "#contact" },
      { name: "FAQs", href: "#faq" },
    ],
  },
];
