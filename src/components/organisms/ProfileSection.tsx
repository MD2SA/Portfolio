import Contacts from "../molecules/Contacts";
import Languages from "../molecules/Languages";


export default function ProfileSection() {
    return (
        <div className="profile-container">
            <img
                src="https://788ab0ljfw.ufs.sh/f/vbCj41Bx9xYQObtMK8cPN9DUJYbefVjgksAZc7qy5iGH1lh3"
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
