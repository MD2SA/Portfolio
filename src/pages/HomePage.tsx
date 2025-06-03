import Contacts from "../components/molecules/Contacts";
import SlideShow from "../components/molecules/SlideShow";
import InfiniteIcons from "../components/molecules/InfiniteIcons";
import "../css/HomePage.css";


export default function HomePage() {
    return (
        <div className="homepage-container">
            <div className="homepage-wide">
                <InfiniteIcons />
                <SlideShow />
            </div>
            <div className="homepage-narrow">
                <Contacts />
            </div>
        </div>
    );
}
