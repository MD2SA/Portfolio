import uk from "../../assets/images/uk-flag.svg";
import spain from "../../assets/images/spain-flag.svg";
import portugal from "../../assets/images/portugal-flag.svg";

export default function Languages() {
    return (
        <div className="languages-container">
            <div className="language">
                <img src={portugal} alt="Portugal flag" className="language-flag" />
                <p className="language-level" >Native</p>
            </div>
            <div className="language">
                <img src={uk} alt="UK flag" className="language-flag" />
                <p className="language-level" >Fluent</p>
            </div>
            <div className="language">
                <img src={spain} alt="Spain flag" className="language-flag" />
                <p className="language-level" data-level="Fluent">Basic</p>
            </div>
        </div>
    );
}
