import {
    SiTypescript,
    SiPython,
    SiJavascript,
    SiGnubash,
    SiReact,
    SiDjango,
    SiSqlite,
    SiGit,
    SiNeovim,
    SiGithub,
    SiEclipseide,
    SiPycharm,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { VscVscodeInsiders } from "react-icons/vsc";
import type { IconType } from "react-icons";
import { BiStar } from "react-icons/bi";

const sectionTitles = ["Languages", "Frameworks", "Tools & IDEs"];

type IconItem = {
    name: string;
    icon: IconType;
    favorite?: boolean;
};

const iconRows: IconItem[][] = [
    [
        {
            name: "Java",
            icon: FaJava,
            favorite: true,
        },
        {
            name: "TypeScript",
            icon: SiTypescript,
            favorite: true,
        },
        {
            name: "Python",
            icon: SiPython,
        },
        {
            name: "JavaScript",
            icon: SiJavascript,
        },
        {
            name: "Bash",
            icon: SiGnubash,
        },
    ],
    [
        {
            name: "React",
            icon: SiReact,
            favorite: true,
        },
        {
            name: "MySQL",
            icon: GrMysql,
        },
        {
            name: "Django",
            icon: SiDjango,
            favorite: true,
        },
        {
            name: "SQLite",
            icon: SiSqlite,
        },
    ],
    [
        {
            name: "Git",
            icon: SiGit
        },
        {
            name: "NeoVim",
            icon: SiNeovim,
            favorite: true,
        },
        {
            name: "GitHub",
            icon: SiGithub
        },
        {
            name: "VSCode",
            icon: VscVscodeInsiders
        },
        {
            name: "Eclipse",
            icon: SiEclipseide
        },
        {
            name: "PyCharm",
            icon: SiPycharm
        },
    ],
];

export default function ToolsIcons() {
    return (
        <div className="bigContainer tools-container">
            {iconRows.map((col, colindex) => (
                <div>
                    <h2>{sectionTitles[colindex]}</h2>
                    <div className="icon-section" key={colindex}>
                        {col.map((item, rindex) => {
                            const { name, icon: Icon, favorite } = item;
                            return (
                                <div key={`col${colindex}-r${rindex}`} className="container-techIcon">
                                    <Icon />
                                    <span>{name}</span>
                                    {favorite && <BiStar />}
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};
