import type { IconType } from "react-icons";

export default function Contact({ contact, Icon }: { contact: string; Icon: IconType }) {
    return (
        <div>
            <Icon />{contact}
        </div>
    );
}
