import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactInfo from "../atoms/ContactInfo";


export default function Contacts() {
    return (
        <div className="contacts-container">
            <a href="https://www.linkedin.com/in/manuel-albuquerque-/" target="_blank">
                <ContactInfo contact="Manuel Albuquerque" Icon={FaLinkedin} />
            </a>
            <a>
                <ContactInfo contact="albuquerque2158@gmail.com" Icon={MdOutlineMailOutline} />
            </a>
            <a href="https://github.com/MD2SA" target="_blank">
                <ContactInfo contact="MD2SA" Icon={FaGithub} />
            </a>
        </div>
    );
}
