import type { IconType } from "react-icons";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function ContactInfo({ contact, Icon }: { contact: string; Icon: IconType }) {

    const hideFullContact = useMediaQuery('(max-width:840px)');

    return (
        <div className="glass-base contact-item">
            <Icon />{!hideFullContact && contact}
        </div>
    );
}
