import avatar from "../../assets/images/avatar.jpg"
import Avatar from "../atoms/Avatar";
import Contacts from "../molecules/Contacts";
import Languages from "../molecules/Languages";


export default function ProfileSection() {
    return (
        <>
            <Avatar imageUrl={avatar} />
            <Contacts />
            <Languages />
        </>
    );
}
