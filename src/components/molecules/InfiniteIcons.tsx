import { memo, useMemo } from "react";
import type { IconItem, IconSection } from "../../assets/constants";
import { sections } from "../../assets/constants";

const RenderRow = memo(({ icons, row }: { icons: IconItem[], row: number }) => {

    const rowClass = row % 2 === 0 ? 'even' : 'odd';

    const memoIcons = useMemo(() => [...icons, ...icons, ...icons], [icons]);

    return (
        <div className={`marquee-track ${rowClass}`} >
            {memoIcons.map((item: IconItem, col: number) => (
                <div key={`${item.name}-${row}-${col}`} className="container-techIcon">
                    <item.icon />
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    );
});

function InfiniteIcons() {
    return (
        <div className="infiniteIcons-container">
            <h2>Languages, FrameWorks & Tools</h2>
            <div className="marquee-wrapper">
                {sections.map((section: IconSection, sectionidx: number) =>
                    <RenderRow icons={section.icons} row={sectionidx} key={`row-${sectionidx}`} />
                )}
            </div>
        </div>

    );
}


export default memo(InfiniteIcons);
