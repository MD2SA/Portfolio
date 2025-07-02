import avatar from "../../assets/images/avatar.webp"
import Contacts from "../molecules/Contacts";
import Languages from "../molecules/Languages";


export default function ProfileSection() {
    return (
        <div className="profile-container">
            <img
                src={avatar}
                className="avatarImage"
            />
            <h1 className="profile-name-heading">
                Manuel Albuquerque<br />
                <small>from Lisboa, Portugal</small>
            </h1>
            <div className="profile-icons">
                <Contacts />
                <Languages />
            </div>
        </div>
    );
}
