import { useState } from "react";
import DonkeyKong from "../../assets/images/DonkeyKong.png";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import "../../assets/css/SlideShow.css"


const projects: { title: string, img: string }[] = [
    {
        title: "DonkeyKong",
        img: DonkeyKong,
    },
    {
        title: "NOGS",
        img: DonkeyKong,
    },
]

export default function SlideShow() {

    const [cur, setCur] = useState(0);

    const goBack = () => {
        setCur(prev => (prev + projects.length - 1) % projects.length);
    };
    const goForward = () => {
        setCur(prev => (prev + 1) % projects.length);
    };

    return (
        <div className="big-container">
            <h2>Projects</h2>
            <div className="container" style={{ paddingTop: 0, }}>
                <h3>{projects[cur].title}</h3>
                <img
                    src={projects[cur].img}
                    className="project-image"
                />
            </div>
            <div className="slideshow-navigationContainer">
                <MdOutlineNavigateBefore
                    onClick={goBack}
                    className="slideshow-navigateIcon"
                />
                <button
                    onClick={() => console.log("HELLO")}
                    className="slideshow-seeMore"
                >
                    See More
                </button>
                <MdOutlineNavigateNext
                    onClick={goForward}
                    className="slideshow-navigateIcon"
                />
            </div>
        </div>
    );
}
