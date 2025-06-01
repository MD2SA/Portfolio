import type { IconType } from "react-icons";

export default function ContactInfo({ contact, Icon }: { contact: string; Icon: IconType }) {
    return (
        <div className="contact-item">
            <Icon />{contact}
        </div>
    );
}
