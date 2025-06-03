import SlideShow from "../components/molecules/SlideShow";
import InfiniteIcons from "../components/molecules/InfiniteIcons";
import "../css/HomePage.css";
import "../css/ProfileCard.css";
import Description from "../components/atoms/Description";
import ProfileSection from "../components/organisms/ProfileSection";


export default function HomePage() {
    return (
        <div className="homepage-container">
            <div className="homepage-narrow">
                <ProfileSection />
            </div>
            <div className="homepage-wide">
                <Description />
                <SlideShow />
                <InfiniteIcons />
            </div>
        </div>
    );
}
