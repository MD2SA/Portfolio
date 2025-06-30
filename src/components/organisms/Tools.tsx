import { useState } from "react";
import InfiniteIcons from "../molecules/InfiniteIcons";
import IconSection from "../molecules/IconSection";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { sections } from "../../assets/constants";



export default function Tools() {
    const [showInfinite, setShowInfinite] = useState(true);
    const isMobile = useMediaQuery('(max-width:840px)');

    const showSectionIcons = isMobile || !showInfinite;

    return (
        <div className="icons-container">
            {showSectionIcons ? <IconSection sections={sections} /> : <InfiniteIcons sections={sections} />}
            {!isMobile && (
                <a className="not-selectable" onClick={() => setShowInfinite(!showInfinite)}>
                    {showInfinite ? 'Show Grid View' : 'Show Infinite Scroll'}
                </a>
            )}
        </div>
    );
}
