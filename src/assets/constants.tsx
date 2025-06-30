import DonkeyKong from "./images/DonkeyKong.png";
import NOGS from "./images/NOGS.png";
import Confidential from "./images/Confidential.png";

import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import { SiDjango, SiEclipseide, SiGit, SiGithub, SiGnubash, SiJavascript, SiNeovim, SiPycharm, SiPython, SiReact, SiSqlite, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscVscodeInsiders } from "react-icons/vsc";
import { GrMysql } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import uk from "./images/uk-flag.svg";
import spain from "./images/spain-flag.svg";
import portugal from "./images/portugal-flag.svg";



export const projects = [
    {
        title: "NOGS",
        img: NOGS,
        description: "NOGS is a full-stack typing game platform where users can improve their typing speed, compete against random opponents, and connect with friends or join teams.",
        github: "https://github.com/MD2SA/NOGS",
        technologies: [
            { name: "Python", icon: SiPython },
            { name: "JavaScript", icon: SiJavascript },
            { name: "React", icon: SiReact },
            { name: "Django", icon: SiDjango },
            { name: "SQLite", icon: SiSqlite },
        ],
    },
    {
        title: "DonkeyKong",
        img: DonkeyKong,
        description: "This is a 2D game inspired by the classic Donkey Kong, developed entirely in Java. The project was originally created as part of the Object-Oriented Programming course, and is currently taking updates for new features",
        github: "https://github.com/MD2SA/DonkeyKong",
        technologies: [
            { name: "Java", icon: FaJava },
        ],
    },
    {
        title: "Confidential",
        img: Confidential,
        description: "I am currently developing a full-stack mobile app. For this project, I had to scrape multiple forms of content from the internet to populate the information database. Aside from that, the details are confidential.",
        github: undefined,
        technologies: [
            { name: "Python", icon: SiPython },
            { name: "TypeScript", icon: SiTypescript },
            { name: "React", icon: SiReact },
            { name: "Django", icon: SiDjango },
            { name: "PostgreSQL", icon: BiLogoPostgresql },
        ],
    }
];


export const languages: { code: string, level: string, src: string }[] = [
    { code: "pt", level: "Native", src: portugal, },
    { code: "en", level: "Fluent", src: uk, },
    { code: "es", level: "Basic", src: spain, },
];


export const events: { title: string, time: string, complement?: string, description: string, url?: string }[] = [
    {
        title: "BSc in Computer Science and Business Management – ISCTE-IUL",
        time: "now",
        complement: "Grade: 17/20",
        description: "Currently starting the 3rd year of a 4-year degree program. Studying key topics such as algorithms, data structures and databases, along with finance, accounting and project evaluation",
        url: "https://www.iscte-iul.pt/degree/code/9189/bachelor-degree-in-computer-science-and-business-management/studyplan",
    },
    {
        title: "Cybersecurity Competition – FISTA",
        time: "Mar 2025",
        description: "Participated in a Capture The Flag (CTF) cybersecurity competition. Solved challenges involving cryptography, web exploitation, reverse engineering and system vulnerabilities",
        url: "https://fista.iscte-iul.pt/concursos/ctf",
    },
    {
        title: "Advanced Excel Certificate – ISCTE-IUL",
        time: "Jan 2024",
        complement: "Grade: 19/20",
        description: "Completed advanced Excel training covering pivot tables, dynamic formulas, data validation, and conditional formatting",
    },
    {
        title: "Junior Achievement Program",
        time: "Apr 2023",
        description: "Developed and executed a business plan as part of an entrepreneurship program. Activities included data estimation and interpretation, problem-solving and teamwork",
        url: "https://www.japortugal.org/",
    },
    {
        title: "High School – Colégio São João de Brito",
        time: "Jul 2023",
        complement: "Grade: 17/20",
        description: "Completed secondary education at Colégio São João de Brito where i choose to follow the Sciences track",
    },
];

export type IconItem = {
    name: string;
    icon: IconType;
    favorite?: boolean;
};

export type IconSection = {
    name: string;
    icons: IconItem[];
};

export const sections: IconSection[] = [
    {
        name: "Languages",
        icons: [
            { name: "Java", icon: FaJava, favorite: true, },
            { name: "JavaScript", icon: SiJavascript, },
            { name: "Python", icon: SiPython, },
            { name: "TypeScript", icon: SiTypescript, favorite: true, },
            { name: "Bash", icon: SiGnubash, },
        ],
    },
    {
        name: "Frameworks & Databases",
        icons: [
            { name: "React", icon: SiReact, favorite: true, },
            { name: "MySQL", icon: GrMysql, },
            { name: "Django", icon: SiDjango, favorite: true, },
            { name: "SQLite", icon: SiSqlite, },
            { name: "PostgreSQL", icon: BiLogoPostgresql, },
        ],
    },
    {
        name: "Tools & IDEs",
        icons: [
            { name: "Git", icon: SiGit, },
            { name: "NeoVim", icon: SiNeovim, favorite: true, },
            { name: "GitHub", icon: SiGithub },
            { name: "VSCode", icon: VscVscodeInsiders },
            { name: "Eclipse", icon: SiEclipseide },
            { name: "PyCharm", icon: SiPycharm },
        ]
    },
];

export const description = {
    title: "Computer Science & Business Management Student - ISCTE",
    text: `
                    I’ve just completed my second year in Computer Science and Business Management at ISCTE.
                    I’m strongly committed to writing clean, reliable code and developing secure, scalable,
                    and high-performance solutions. Beyond the technical side, I’m deeply
                    interested in the intersection of technology, business, and finance,
                    always looking for ways to bridge them through software.
                    I enjoy learning, experimenting, and turning ideas into real, valuable products.
`,

}

const email = "albuquerque2158@gmail.com";
const subject = encodeURIComponent("Hello from your website");
const body = encodeURIComponent("Hello Manuel,\n\nI came across your website and wanted to get in touch with you.\n\nBest regards,\n[Your Name]");

const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

export const contacts = [
    {
        "name": "Manuel Albuquerque",
        "url": "https://www.linkedin.com/in/manuel-albuquerque-/",
        "icon": FaLinkedin,
        "target": "_blank",
    },
    {
        "name": "albuquerque2158@gmail.com",
        "url": mailtoLink,
        "icon": MdOutlineMailOutline,
        "target": "_self",
    },
    {
        "name": "MD2SA",
        "url": "https://github.com/MD2SA",
        "icon": FaGithub,
        "target": "_blank",
    }
]
