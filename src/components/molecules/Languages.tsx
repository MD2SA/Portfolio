import { languages } from "../../assets/constants";

export default function Languages() {
    return (
        <div className="languages-container">
            {languages?.map((lang) => (
                <div className="glass-base language" key={lang.code}>
                    <img src={lang.src} className="language-flag" />
                    <p className="language-level" >{lang.level}</p>
                </div>
            ))}
        </div>
    );
}
