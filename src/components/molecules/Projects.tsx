import { useState } from "react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { FaGithub, FaLock, FaLockOpen } from "react-icons/fa6";

import { projects } from "../../assets/constants";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showDetail, setShowDetail] = useState(false);
    const [lockDetail, setLockDetail] = useState(false);

    const goBack = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    const goForward = () => setCurrentIndex((prev) => (prev + 1) % projects.length);

    const currentProject = projects[currentIndex];

    const isTouchDevice = useMediaQuery("(hover: none)");

    return (
        <div className="projects-container">
            <div>
                <div className="projects-top-container">
                    <h2>Projects</h2>
                    {currentProject.github ?
                        (
                            <FaGithub
                                onClick={() => window.open(currentProject.github, "_blank")}
                                className="glass-base projects-details-button"
                            />
                        ) : (
                            null
                        )
                    }
                </div>
                <div>
                    <div
                        className="projects-image-wrapper"
                        onMouseOver={!isTouchDevice ? () => setShowDetail(true) : undefined}
                        onMouseLeave={!isTouchDevice ? () => setShowDetail(false) : undefined}
                        onClick={() => {
                            setLockDetail(!lockDetail)
                            setShowDetail(false);
                        }}
                    >
                        <img
                            src={currentProject.img}
                            className="projects-image"
                            alt={currentProject.title}
                        />
                        <div className={`projects-icons-container ${showDetail || lockDetail ? "visible" : ""}`}>
                            {
                                currentProject.technologies.map((tech, index) => {
                                    const { icon: Icon } = tech;
                                    return (
                                        <div key={`tech-${index}`} className="projects-icon">
                                            <Icon />
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className={`projects-description ${showDetail || lockDetail ? "visible" : ""}`}>
                            <p>{currentProject.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="not-selectable projects-navigation">
                <MdOutlineNavigateBefore onClick={goBack} className="glass-base nav-icon" />
                <button onClick={() => setLockDetail(!lockDetail)} className="glass-base see-more-btn">{lockDetail ? <FaLock /> : <FaLockOpen />}</button>
                <MdOutlineNavigateNext onClick={goForward} className="glass-base nav-icon" />
            </div>
        </div>
    );
}
