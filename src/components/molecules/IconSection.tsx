import { useState } from "react";
import { BiStar } from "react-icons/bi";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import type { IconItem, IconSection } from "../../assets/constants";

export default function IconSection({ sections }: { sections: IconSection[] }) {

    const [cur, setCur] = useState<number>(0);

    const section = sections[cur];

    const goBack = () => setCur((prev) => (prev - 1 + sections.length) % sections.length);
    const goForward = () => setCur((prev) => (prev + 1) % sections.length);

    return (
        <div className="icon-section-container">
            <div>
                <h2>{section.name}</h2>
                <div className="icon-grid-container">
                    {section.icons.map((item: IconItem, itemidx: number) => {
                        const { name, icon: Icon, favorite } = item;
                        return (
                            <div key={`icon-${itemidx}`} className="container-techIcon">
                                <Icon />
                                <span>{name}</span>
                                {favorite && <BiStar className="favorite-star" />}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="not-selectable section-icon-navigation">
                <MdOutlineNavigateBefore onClick={goBack} className="nav-icon" />
                <MdOutlineNavigateNext onClick={goForward} className="nav-icon" />
            </div>
        </div>
    );
}
