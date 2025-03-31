import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaFacebook,
  FaInstagram,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { BiLogoJavascript } from "react-icons/bi";
import { SiExpress, SiMongodb, SiMysql, SiWebpack } from "react-icons/si";
import {
  VscVscode,
  VscCommentUnresolved,
  VscTerminalPowershell,
} from "react-icons/vsc";
import { FaGitAlt, FaXTwitter, FaDribbble } from "react-icons/fa6";
import { MdGroups3 } from "react-icons/md";

import Adventure from "../assets/images/proyects/adventure.png";
import Homeland from "../assets/images/proyects/homeland.png";
import Hotel from "../assets/images/proyects/hotel.png";
import Ncrt from "../assets/images/proyects/ncrt.png";
import Tpm from "../assets/images/proyects/tpm.png";

export const MENU_LINKS = [
  { id: "01", label: "Home", offset: -100, to: "hero" },
  { id: "01", label: "Skills", offset: -100, to: "skills" },
  { id: "01", label: "About", offset: -100, to: "about" },
  { id: "01", label: "Project", offset: -100, to: "project" },
  { id: "01", label: "Contacts", offset: -100, to: "contacts" },
];

export const SKILLS_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "01", label: "Frontend", value: "frontend" },
  { id: "01", label: "Backend", value: "backend" },
  { id: "01", label: "Tools", value: "tools" },
  { id: "01", label: "Skills", value: "skills" },
];

export const SKILLS = [
  {
    id: "01",
    icon: FaReact,
    skill: "React JS",
    progress: 95,
    type: frontend,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, doloremque obcaecati ducimus quas eum velit magni fugit blanditiis eius. Ipsa, dolorem! Atque ipsum eligendi voluptates. Vel saepe neque molestias ratione.",
  },
  {
    id: "02",
    icon: FaHtml5,
    skill: "HTML",
    progress: 99,
    type: frontend,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, doloremque obcaecati ducimus quas eum velit magni fugit blanditiis eius. Ipsa, dolorem! Atque ipsum eligendi voluptates. Vel saepe neque molestias ratione.",
  },
  {
    id: "03",
    icon: FaCss3,
    skill: "CSS",
    progress: 65,
    type: frontend,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, doloremque obcaecati ducimus quas eum velit magni fugit blanditiis eius. Ipsa, dolorem! Atque ipsum eligendi voluptates. Vel saepe neque molestias ratione.",
  },
  {
    id: "04",
    icon: BiLogoJavascript,
    skill: "JavaScript",
    progress: 95,
    type: frontend,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, doloremque obcaecati ducimus quas eum velit magni fugit blanditiis eius. Ipsa, dolorem! Atque ipsum eligendi voluptates. Vel saepe neque molestias ratione.",
  },
  {
    id: "05",
    icon: FaNodeJs,
    skill: "Node.js",
    progress: 95,
    type: backend,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, doloremque obcaecati ducimus quas eum velit magni fugit blanditiis eius. Ipsa, dolorem! Atque ipsum eligendi voluptates. Vel saepe neque molestias ratione.",
  },
  {
    id: "06",
    icon: SiExpress,
    skill: "Express.js",
    progress: 95,
    type: backend,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, doloremque obcaecati ducimus quas eum velit magni fugit blanditiis eius. Ipsa, dolorem! Atque ipsum eligendi voluptates. Vel saepe neque molestias ratione.",
  },
  {
    id: "07",
    icon: SiMongodb,
    skill: "MongoDB",
    progress: 95,
    type: backend,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, doloremque obcaecati ducimus quas eum velit magni fugit blanditiis eius. Ipsa, dolorem! Atque ipsum eligendi voluptates. Vel saepe neque molestias ratione.",
  },
  {
    id: "08",
    icon: SiMysql,
    skill: "SQL",
    progress: 95,
    type: backend,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, doloremque obcaecati ducimus quas eum velit magni fugit blanditiis eius. Ipsa, dolorem! Atque ipsum eligendi voluptates. Vel saepe neque molestias ratione.",
  },
  {
    id: "09",
    icon: FaGitAlt,
    skill: "Github",
    progress: 95,
    type: backend,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, doloremque obcaecati ducimus quas eum velit magni fugit blanditiis eius. Ipsa, dolorem! Atque ipsum eligendi voluptates. Vel saepe neque molestias ratione.",
  },
];

export const ABOUT_ME = {
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, consequatur laborum rerum magnam natus sapiente est accusantium dolorem maxime, quidem mollitia suscipit corrupti illo tenetur repellat numquam perferendis. Ipsam, deserunt.",

  socialLinks: [
    { id: "01", label: "Linkedin", icon: FaLinkedinIn, link: "#" },
    { id: "01", label: "Instagram", icon: FaInstagram, link: "#" },
    { id: "01", label: "Github", icon: FaGitAlt, link: "#" },
  ],

  email: "thomasbrets1999@gmail.com",
  phone: "+54 9 2262 501331",
};

export const PROJECTS = [

]
