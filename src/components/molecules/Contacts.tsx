import { contacts } from "../../assets/constants";
import ContactInfo from "../atoms/ContactInfo";


export default function Contacts() {

    return (
        <div className="contacts-container">
            {contacts?.map((contact, idx) => (
                <a href={contact.url} key={`contact-${idx}`} target={contact.target}>
                    <ContactInfo contact={contact.name} Icon={contact.icon} />
                </a>
            ))}
        </div>
    );
}
