import { useState } from "react";
import DonkeyKong from "../../assets/images/DonkeyKong.png";
import NOGS from "../../assets/images/NOGS.png";
import Confidential from "../../assets/images/Confidential.png";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { FaJava } from "react-icons/fa";
import { SiReact, SiJavascript, SiPython, SiDjango, SiSqlite, SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";

const projects = [
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
        title: "Confidential",
        img: Confidential,
        description: "I am currently developing a full-stack mobile app. For this project, I had to scrape multiple files from the internet to populate the information database. Aside from that, the details are confidential.",
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

export default function SlideShow() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showDetail, setShowDetail] = useState(false);

    const goBack = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    const goForward = () => setCurrentIndex((prev) => (prev + 1) % projects.length);

    const currentProject = projects[currentIndex];

    return (
        <div className="slideshow-container">
            <div>
                <div className="slideshow-top-container">
                    <h2>Projects</h2>
                    {currentProject.github ?
                        (
                            <FaGithub
                                onClick={() => window.open(currentProject.github, "_blank")}
                                className="glass-base slideshow-details-button"
                            />
                        ) : (
                            null
                        )
                    }
                </div>
                <div>
                    <div className="slideshow-image-wrapper">
                        <img
                            src={currentProject.img}
                            className="slideshow-image"
                            alt={currentProject.title}
                        />
                        <div className={`slideshow-icons-container ${showDetail ? "visible" : ""}`}>
                            {
                                currentProject.technologies.map((tech, index) => {
                                    const { icon: Icon } = tech;
                                    return (
                                        <div key={`tech-${index}`} className="slideshow-icon">
                                            <Icon />
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className={`slideshow-description ${showDetail ? "visible" : ""}`}>
                            <p>{currentProject.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slideshow-navigation">
                <MdOutlineNavigateBefore onClick={goBack} className="glass-base nav-icon" />
                <button onClick={() => setShowDetail(!showDetail)} className="glass-base see-more-btn">See {!showDetail ? "More" : "Less"}</button>
                <MdOutlineNavigateNext onClick={goForward} className="glass-base nav-icon" />
            </div>
        </div>
    );
}
