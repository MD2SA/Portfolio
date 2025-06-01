
import { useState } from "react";
import DonkeyKong from "../../assets/images/DonkeyKong.png";
import Project from "../atoms/Project";


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
        <div>
            <h2>Projects</h2>
            <Project title={projects[cur].title} img={projects[cur].img} />
            <button onClick={goBack}>GO BACK</button>
            <button>See More</button>
            <button onClick={goForward}>GO FORWARD</button>
        </div>
    );
}
