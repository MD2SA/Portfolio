import { memo, useCallback, useMemo, useState } from "react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { FaGithub, FaLock, FaLockOpen } from "react-icons/fa6";

import { projects, type IconItem } from "../../assets/constants";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const TechIcons = memo(({ technologies }: { technologies: IconItem[] }) => (
    <>
        {
            technologies.map((tech: IconItem, index) => {
                const { icon: Icon } = tech;
                return (
                    <div key={`tech-${index}`} className="projects-icon">
                        <Icon />
                    </div>
                );
            })
        }
    </>
));


export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showDetail, setShowDetail] = useState(false);
    const [lockDetail, setLockDetail] = useState(false);

    const goBack = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    }, []);
    const goForward = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, []);

    const currentProject = useMemo(() => projects[currentIndex], [currentIndex]);

    const isTouchDevice = useMediaQuery("(hover: none)");

    const handleMouseOver = useCallback(() => {
        setShowDetail(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setShowDetail(false);
    }, []);
    const handleOnClick = useCallback(() => {
        setLockDetail(prev => !prev);
        setShowDetail(false);
    }, []);

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
                        onMouseOver={!isTouchDevice ? handleMouseOver : undefined}
                        onMouseLeave={!isTouchDevice ? handleMouseLeave : undefined}
                        onClick={handleOnClick}
                    >
                        <img
                            src={currentProject.img}
                            className="projects-image"
                            alt={currentProject.title}
                        />
                        <div className={`projects-icons-container ${showDetail || lockDetail ? "visible" : ""}`}>
                            <TechIcons technologies={currentProject.technologies} />
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
