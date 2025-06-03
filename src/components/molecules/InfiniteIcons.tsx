import type { IconType } from "react-icons";
import { SiReact, SiTypescript, SiJavascript, SiPython, SiGnubash, SiGit, SiGithub, SiNeovim, SiEclipseide, SiPycharm, SiDjango, SiSqlite, SiPhpmyadmin } from "react-icons/si";
import "../../css/InfiniteIcons.css"
import { FaJava } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { GrMysql } from "react-icons/gr";

type IconItem = {
    name: string;
    icon: IconType;
};

const iconRows: IconItem[][] = [
    // Languages
    [
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Python", icon: SiPython },
        { name: "Java", icon: FaJava },
        { name: "Bash", icon: SiGnubash },
    ],
    // Tools & IDEs
    [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "NeoVim", icon: SiNeovim },
        { name: "VSCode", icon: VscVscodeInsiders },
        { name: "Eclipse", icon: SiEclipseide },
        { name: "PyCharm", icon: SiPycharm },
    ],
    // Frameworks & Databases
    [
        { name: "React", icon: SiReact },
        { name: "Django", icon: SiDjango },
        { name: "SQLite", icon: SiSqlite },
        { name: "MySQL", icon: GrMysql },
        { name: "phpMyAdmin", icon: SiPhpmyadmin },
    ],
];

function renderRow(icons: IconItem[], row: number) {
    return (
        <div className="marquee-track" key={`row-${row}`}>
            {[...icons, ...icons].map((item: IconItem, col: number) => (
                <div key={`${item.name}-${row}-${col}`} className="container-techIcon">
                    <item.icon />
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    );
}

export default function InfiniteIcons() {
    return (
        <div className="marquee-wrapper">
            {iconRows.map((list: IconItem[], row: number) => renderRow(list, row))}
        </div>
    );
}

