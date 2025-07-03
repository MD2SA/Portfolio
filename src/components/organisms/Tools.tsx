import { useCallback, useState } from "react";
import InfiniteIcons from "../molecules/InfiniteIcons";
import IconSection from "../molecules/IconSection";

export default function Tools() {
    const [showInfinite, setShowInfinite] = useState(true);

    const toggleView = useCallback(() => setShowInfinite(prev => !prev), []);

    return (
        <div className="icons-container">
            {!showInfinite ? <IconSection /> : <InfiniteIcons />}
            <a className="not-selectable" onClick={toggleView}>
                {showInfinite ? 'Show Grid View' : 'Show Infinite Scroll'}
            </a>
        </div>
    );
}
