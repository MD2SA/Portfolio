import type { IconType } from "react-icons";
import { SiReact, SiTypescript, SiJavascript, SiPython, SiGnubash, SiGit, SiGithub, SiNeovim, SiEclipseide, SiPycharm, SiDjango, SiSqlite } from "react-icons/si";
import "../../css/InfiniteIcons.css"
import { FaJava } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { GrMysql } from "react-icons/gr";

type IconItem = {
    name: string;
    icon: IconType;
};

const iconRows: IconItem[][] = [
    // Languages
    [
        { name: "TypeScript", icon: SiTypescript },
        { name: "Java", icon: FaJava },
        { name: "Python", icon: SiPython },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Bash", icon: SiGnubash },
    ],
    // FrameWorks
    [
        { name: "React", icon: SiReact },
        { name: "MySQL", icon: GrMysql },
        { name: "Django", icon: SiDjango },
        { name: "SQLite", icon: SiSqlite },
    ],
    // Tools & IDEs
    [
        { name: "Git", icon: SiGit },
        { name: "NeoVim", icon: SiNeovim },
        { name: "GitHub", icon: SiGithub },
        { name: "VSCode", icon: VscVscodeInsiders },
        { name: "Eclipse", icon: SiEclipseide },
        { name: "PyCharm", icon: SiPycharm },
    ],
];

function renderRow(icons: IconItem[], row: number) {
    const rowClass = row % 2 === 0 ? 'even' : 'odd';
    return (
        <div className={`marquee-track ${rowClass}`} key={`row-${row}`}>
            {[...icons, ...icons, ...icons].map((item: IconItem, col: number) => (
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
        <div className="bigContainer infiniteIcons-container">
            <h2>Languages, FrameWorks and Tools</h2>
            <div className="marquee-wrapper">
                {iconRows.map((list: IconItem[], row: number) => renderRow(list, row))}
            </div>
            <Link to={"/all"}>➥See more</Link>
        </div>

    );
}

