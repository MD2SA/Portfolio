import Contacts from "../components/molecules/Contacts";
import SlideShow from "../components/molecules/SlideShow";
import InfiniteIcons from "../components/molecules/InfiniteIcons";
import "../css/HomePage.css";
import "../css/ProfileCard.css";
import Avatar from "../components/atoms/Avatar";
import avatar from "../assets/images/avatar.jpg";
import Description from "../components/atoms/Description";


export default function HomePage() {
    return (
        <div className="homepage-container">
            <div className="homepage-narrow">
                <Avatar imageUrl={avatar} />
                <Contacts />
            </div>
            <div className="homepage-wide">
                <Description />
                <SlideShow />
                <InfiniteIcons />
            </div>
        </div>
    );
}
