import { useState } from "react";
import InfiniteIcons from "../molecules/InfiniteIcons";
import ToolsIcons from "../molecules/ToolsIcons";

export default function IconsSection() {
    const [showInfinite, setShowInfinite] = useState(true);
    return (
        <>
            {showInfinite ?
                (
                    <div className="icons-container">
                        <InfiniteIcons />
                        <a onClick={() => setShowInfinite(false)}>➥Expand</a>
                    </div>
                ) : (
                    <div className="icons-container">
                        <ToolsIcons />
                        <a onClick={() => setShowInfinite(true)}>➥Reduce</a>
                    </div>
                )
            }

        </>
    );
}
