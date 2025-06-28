import { useState } from "react";
import InfiniteIcons from "../molecules/InfiniteIcons";
import ToolsIcons from "../molecules/ToolsIcons";
import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa6";
import { SiDjango, SiEclipseide, SiGit, SiGithub, SiGnubash, SiJavascript, SiNeovim, SiPycharm, SiPython, SiReact, SiSqlite, SiTypescript } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";

export type IconItem = {
    name: string;
    icon: IconType;
    favorite?: boolean;
};

export type IconSection = {
    name: string;
    icons: IconItem[];
};

const sections: IconSection[] = [
    {
        name: "Languages",
        icons: [
            { name: "Java", icon: FaJava, favorite: true, },
            { name: "TypeScript", icon: SiTypescript, favorite: true, },
            { name: "Python", icon: SiPython, },
            { name: "JavaScript", icon: SiJavascript, },
            { name: "Bash", icon: SiGnubash, },
        ],
    },
    {
        name: "Frameworks",
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

export default function IconsSection() {
    const [showInfinite, setShowInfinite] = useState(true);
    return (
        <>
            {showInfinite ?
                (
                    <div className="icons-container">
                        <InfiniteIcons sections={sections} />
                        <a onClick={() => setShowInfinite(false)}>➥Expand</a>
                    </div>
                ) : (
                    <div className="icons-container">
                        <ToolsIcons sections={sections} />
                        <a onClick={() => setShowInfinite(true)}>➥Reduce</a>
                    </div>
                )
            }

        </>
    );
}
