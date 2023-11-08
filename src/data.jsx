import { nanoid } from "nanoid";
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoBootstrap,
} from "react-icons/bi";
import { BsFiletypeScss } from "react-icons/bs";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "Html",
    icon: <AiFillHtml5 className="h-16 w-16 text-purple-500" />,
  },
  {
    id: nanoid(),
    title: "css",
    icon: <BiLogoCss3 className="h-16 w-16 text-purple-500" />,
  },
  {
    id: nanoid(),
    title: "bootstrap",
    icon: <BiLogoBootstrap className="h-16 w-16 text-purple-500" />,
  },
  {
    id: nanoid(),
    title: "scss",
    icon: <BsFiletypeScss className="h-16 w-16 text-purple-500" />,
  },
  {
    id: nanoid(),
    title: "javascript",
    icon: <BiLogoJavascript className="h-16 w-16 text-purple-500" />,
  },
  {
    id: nanoid(),
    title: "react",
    icon: <BiLogoReact className="h-16 w-16 text-purple-500" />,
  },
  {
    id: nanoid(),
    title: "tailwind",
    icon: <BiLogoTailwindCss className="h-16 w-16 text-purple-500" />,
  },
];
