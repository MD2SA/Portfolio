import { useState } from "react";
import InfiniteIcons from "../molecules/InfiniteIcons";
import IconSection from "../molecules/IconSection";
import { sections } from "../../assets/constants";



export default function Tools() {
    const [showInfinite, setShowInfinite] = useState(true);

    return (
        <div className="icons-container">
            {!showInfinite ? <IconSection sections={sections} /> : <InfiniteIcons sections={sections} />}
            <a className="not-selectable" onClick={() => setShowInfinite(!showInfinite)}>
                {showInfinite ? 'Show Grid View' : 'Show Infinite Scroll'}
            </a>
        </div>
    );
}
