import { memo, useCallback, useEffect, useMemo, useState } from "react";
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


const ProjectDetails = memo(({ project, visible }: { project: typeof projects[0]; visible: boolean }) => {
    return (
        <>
            <div className={`projects-icons-container ${visible ? "visible" : ""}`}>
                <TechIcons technologies={project.technologies} />
            </div>
            <div className={`projects-description ${visible ? "visible" : ""}`}>
                <p>{project.description}</p>
            </div>
        </>
    );
});

const Navigation = memo(
    ({
        onBack,
        onForward,
        lockDetail,
        toggleLock,
    }: {
        onBack: () => void;
        onForward: () => void;
        lockDetail: boolean;
        toggleLock: () => void;
    }) => (
        <div className="not-selectable projects-navigation">
            <MdOutlineNavigateBefore onClick={onBack} className="glass-base nav-icon" />
            <button onClick={toggleLock} className="glass-base see-more-btn">
                {lockDetail ? <FaLock /> : <FaLockOpen />}
            </button>
            <MdOutlineNavigateNext onClick={onForward} className="glass-base nav-icon" />
        </div>
    )
);

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showDetail, setShowDetail] = useState(false);
    const [lockDetail, setLockDetail] = useState(false);

    const currentProject = useMemo(() => projects[currentIndex], [currentIndex]);

    const isTouchDevice = useMediaQuery("(hover: none)");

    const goBack = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    }, []);

    const goForward = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, []);

    const openGithub = useCallback(() => {
        if (currentProject) window.open(currentProject.github, "_blank");
    }, [currentProject.github]);

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
    const toggleLockDetail = useCallback(() => {
        setLockDetail(prev => !prev);
    }, []);


    useEffect(() => {
        projects.forEach((project) => {
            const img = new Image();
            img.src = project.img;
        });
    }, []);


    return (
        <div className="projects-container">
            <div>
                <div className="projects-top-container">
                    <h2>Projects</h2>
                    {currentProject.github && (
                        <FaGithub
                            onClick={openGithub}
                            className="glass-base projects-details-button"
                        />
                    )}
                </div>
                <div>
                    <div
                        className="projects-image-wrapper"
                        onMouseOver={!isTouchDevice ? handleMouseOver : undefined}
                        onMouseLeave={!isTouchDevice ? handleMouseLeave : undefined}
                        onClick={handleOnClick}
                    >
                        <img
                            loading="lazy"
                            src={currentProject.img}
                            className="projects-image"
                            alt={currentProject.title}
                            decoding="async"
                            fetchPriority="high"
                        />
                        <ProjectDetails project={currentProject} visible={showDetail || lockDetail} />
                    </div>
                </div>
            </div>
            <Navigation onBack={goBack} onForward={goForward} lockDetail={lockDetail} toggleLock={toggleLockDetail} />
        </div>
    );
}
