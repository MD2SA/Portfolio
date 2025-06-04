import avatar from "../../assets/images/avatar.jpg"
import Avatar from "../atoms/Avatar";
import Contacts from "../molecules/Contacts";
import Languages from "../molecules/Languages";


export default function ProfileSection() {
    return (
        <>
            <Avatar imageUrl={avatar} />
            <h1 className="name-heading">
                Manuel Albuquerque<br />
                <small>from Lisboa, Portugal</small>
            </h1>
            <Contacts />
            <Languages />
        </>
    );
}
