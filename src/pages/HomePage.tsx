import SlideShow from "../components/molecules/SlideShow";
import InfiniteIcons from "../components/molecules/InfiniteIcons";
import "../css/HomePage.css";
import "../css/ProfileCard.css";
import Description from "../components/atoms/Description";
import ProfileSection from "../components/organisms/ProfileSection";
import TimeLine from "../components/molecules/TimeLine";
import { useEffect, useRef } from "react";


export default function HomePage() {
    const wideContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!wideContainerRef.current) return;

        // Force immediate scroll to bottom (no animation)
        const container = wideContainerRef.current;
        container.style.scrollBehavior = 'auto'; // Disable smooth scroll temporarily
        container.scrollTop = container.scrollHeight;

        // Wait for the next frame to ensure scroll position is set
        requestAnimationFrame(() => {
            // Re-enable smooth scrolling
            container.style.scrollBehavior = 'smooth';

            // Scroll back to top after a slight delay (for dramatic effect)
            setTimeout(() => {
                container.scrollTop = 0;
            }, 800); // Adjust delay (800ms feels dramatic but smooth)
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
                <InfiniteIcons />
                <TimeLine />
            </div>
        </div>
    );
}
