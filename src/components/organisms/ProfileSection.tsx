import Avatar from "../atoms/Avatar";
import Contacts from "../molecules/Contacts";
import Languages from "../molecules/Languages";


export default function ProfileSection() {
    return (
        <div className="profile-container">
            <Avatar />
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
