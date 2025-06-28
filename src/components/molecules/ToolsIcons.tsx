import { BiStar } from "react-icons/bi";
import type { IconSection } from "../organisms/IconsSection";

export default function ToolsIcons({ sections }: { sections: IconSection[] }) {
    return (
        <div className="bigContainer tools-container">
            {sections.map((section, sectionidx) => (
                <div>
                    <h2>{section.name}</h2>
                    <div className="icon-section" key={`sect-${sectionidx}`}>
                        {section.icons.map((item, itemidx) => {
                            const { name, icon: Icon, favorite } = item;
                            return (
                                <div key={`sect${sectionidx}-i${itemidx}`} className="container-techIcon">
                                    <Icon />
                                    <span>{name}</span>
                                    {favorite && <BiStar />}
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};
