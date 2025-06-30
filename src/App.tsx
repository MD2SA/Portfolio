import { useEffect, useRef } from "react";
import Projects from "./components/molecules/Projects";
import Description from "./components/atoms/Description";
import ProfileSection from "./components/organisms/ProfileSection";
import TimeLine from "./components/molecules/TimeLine";
import Tools from "./components/organisms/Tools";


export default function HomePage() {
    const wideContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!wideContainerRef.current) return;

        const container = wideContainerRef.current;
        container.style.scrollBehavior = 'auto';
        container.scrollTop = container.scrollHeight;

        requestAnimationFrame(() => {
            container.style.scrollBehavior = 'smooth';
            setTimeout(() => {
                container.scrollTop = 0;
            }, 800);
        });

    }, []);

    return (
        <div className="app-container">
            <div className="app-narrow">
                <ProfileSection />
            </div>
            <div className="app-wide" ref={wideContainerRef}>
                <Description />
                <Projects />
                <Tools />
                <TimeLine />
            </div>
        </div>
    );
}
