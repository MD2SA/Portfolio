import { useState } from "react";
import InfiniteIcons from "../molecules/InfiniteIcons";
import SectionIcons from "../molecules/SectionIcons";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { sections } from "../../assets/constants";



export default function IconsSection() {
    const [showInfinite, setShowInfinite] = useState(true);
    const isMobile = useMediaQuery('(max-width:840px)');

    const showSectionIcons = isMobile || !showInfinite;

    return (
        <div className="icons-container">
            {showSectionIcons ? <SectionIcons sections={sections} /> : <InfiniteIcons sections={sections} />}
            {!isMobile && (
                <a onClick={() => setShowInfinite(!showInfinite)}>
                    {showInfinite ? 'Show Grid View' : 'Show Infinite Scroll'}
                </a>
            )}
        </div>
    );
}
