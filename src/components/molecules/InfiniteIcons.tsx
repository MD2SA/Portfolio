import type { IconItem, IconSection } from "../../assets/constants";



function renderRow(icons: IconItem[], row: number) {
    const rowClass = row % 2 === 0 ? 'even' : 'odd';
    return (
        <div className={`marquee-track ${rowClass}`} key={`row-${row}`}>
            {[...icons, ...icons, ...icons].map((item: IconItem, col: number) => (
                <div key={`${item.name}-${row}-${col}`} className="container-techIcon">
                    <item.icon />
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    );
}

export default function InfiniteIcons({ sections }: { sections: IconSection[] }) {
    return (
        <div className="infiniteIcons-container">
            <h2>Languages, FrameWorks & Tools</h2>
            <div className="marquee-wrapper">
                {sections.map((section: IconSection, sectionidx: number) =>
                    renderRow(section.icons, sectionidx)
                )}
            </div>
        </div>

    );
}

