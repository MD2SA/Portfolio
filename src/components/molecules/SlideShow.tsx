import { useState } from "react";
import DonkeyKong from "../../assets/images/DonkeyKong.png";
import NOGS from "../../assets/images/NOGS.png";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import "../../css/SlideShow.css";

const projects = [
    {
        title: "DonkeyKong",
        img: DonkeyKong,
        description: "A modern reimagining of the classic Donkey Kong arcade game, built entirely in Java. Features updated graphics, smoother controls, and nostalgic gameplay true to the original.",
    },
    {
        title: "NOGS",
        img: NOGS,
        description: "NOGS is a full-stack typing game platform where users can sharpen their typing speed, challenge random opponents, and connect with friends in real-time multiplayer races.",
    },
];

export default function SlideShow() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const goBack = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    const goForward = () => setCurrentIndex((prev) => (prev + 1) % projects.length);

    const currentProject = projects[currentIndex];

    return (
        <div className="big-container slideshow-container">
            <h2>Projects</h2>
            <div
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <div className="slideshow-image-wrapper">
                    <img
                        src={currentProject.img}
                        className="slideshow-image"
                        alt={currentProject.title}
                    />
                    <div className={`slideshow-description ${isHovering ? "visible" : ""}`}>
                        <p>{currentProject.description}</p>
                    </div>
                </div>
            </div>
            <div className="slideshow-navigation">
                <MdOutlineNavigateBefore onClick={goBack} className="nav-icon" />
                <button className="see-more-btn">See More</button>
                <MdOutlineNavigateNext onClick={goForward} className="nav-icon" />
            </div>
        </div>
    );
}
