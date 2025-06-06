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

const sectionTitles = ["Languages", "Frameworks", "Tools & IDEs"];

type IconItem = {
    name: string;
    icon: IconType;
};

const iconRows: IconItem[][] = [
    [
        { name: "Java", icon: FaJava },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Python", icon: SiPython },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Bash", icon: SiGnubash },
    ],
    [
        { name: "React", icon: SiReact },
        { name: "MySQL", icon: GrMysql },
        { name: "Django", icon: SiDjango },
        { name: "SQLite", icon: SiSqlite },
    ],
    [
        { name: "Git", icon: SiGit },
        { name: "NeoVim", icon: SiNeovim },
        { name: "GitHub", icon: SiGithub },
        { name: "VSCode", icon: VscVscodeInsiders },
        { name: "Eclipse", icon: SiEclipseide },
        { name: "PyCharm", icon: SiPycharm },
    ],
];

export default function ToolsIcons() {
    return (
        <div className="bigContainer tools-container">
            {iconRows.map((col, colindex) => (
                <div>
                    <h2>{sectionTitles[colindex]}</h2>
                    <div className="icon-section" key={colindex}>
                        {col.map(({ name, icon: Icon }, rindex) => (
                            <div key={`col${colindex}-r${rindex}`} className="container-techIcon">
                                <Icon />
                                <span>{name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
