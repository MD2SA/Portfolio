import { useState } from "react";
import { BiStar } from "react-icons/bi";
import type { IconSection } from "../organisms/IconsSection";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

export default function SectionIcons({ sections }: { sections: IconSection[] }) {

    const [cur, setCur] = useState<number>(0);

    const section = sections[cur];

    const goBack = () => setCur((prev) => (prev - 1 + sections.length) % sections.length);
    const goForward = () => setCur((prev) => (prev + 1) % sections.length);

    return (
        <div>
            <div>
                <h2>{section.name}</h2>
                <div className="marquee-wrapper section-container">
                    {section.icons.map((item, itemidx) => {
                        const { name, icon: Icon, favorite } = item;
                        return (
                            <div key={`icon-${itemidx}`} className="container-techIcon">
                                <Icon />
                                <span>{name}</span>
                                {favorite && <BiStar />}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="section-icon-navigation">
                <MdOutlineNavigateBefore onClick={goBack} className="nav-icon" />
                <MdOutlineNavigateNext onClick={goForward} className="nav-icon" />
            </div>
        </div>
    );
}
