import SlideShow from "../components/molecules/SlideShow";
import Description from "../components/atoms/Description";
import ProfileSection from "../components/organisms/ProfileSection";
import TimeLine from "../components/molecules/TimeLine";
import { useEffect, useRef } from "react";
import IconsSection from "../components/organisms/IconsSection";


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
        <div className="homepage-container">
            <div className="homepage-narrow">
                <ProfileSection />
            </div>
            <div className="homepage-wide" ref={wideContainerRef}>
                <Description />
                <SlideShow />
                <IconsSection />
                <TimeLine />
            </div>
        </div>
    );
}
