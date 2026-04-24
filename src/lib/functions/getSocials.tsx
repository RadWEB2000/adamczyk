import { FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon, MediumIcon,  YouTubeIcon } from "@/assets/svgr";
import { ComponentType, SVGProps } from "react";

const socials = {
  facebook: {
    color: "#1877f2",
    icon: FacebookIcon,
  },
  github: {
    color: "#777777",
    icon: GithubIcon,
  },
  instagram: {
    color: "#c32aa3",
    icon: InstagramIcon,
  },
  linkedin: {
    color: "#0a66c2",
    icon: LinkedInIcon,
  },
  medium: {
    color: "#02b875",
    icon: MediumIcon,
  },
  youtube: {
    color: "#ff0000",
    icon: YouTubeIcon,
  },
} satisfies Record<T_SocialTypes, {
    color:string;
    icon:ComponentType<SVGProps<SVGElement>>
}>;

export function getSocials({name}:{name:T_SocialTypes}) {

    return socials[name] ?? null;
}