import type { IconType } from "react-icons";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useMemo } from "react";

export default function ContactInfo({ contact, Icon }: { contact: string; Icon: IconType }) {

    const maxWidth = useMediaQuery('(max-width:840px)');
    const maxHeightMinWidth = useMediaQuery('(max-height: 770px) and (max-width: 1225px)');

    const hideFullContact = useMemo(() => maxWidth || maxHeightMinWidth, [maxWidth, maxHeightMinWidth]);

    return (
        <div className="glass-base contact-item">
            <Icon />{!hideFullContact && contact}
        </div>
    );
}
