import Contact from "../atoms/Contact";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6"


export default function ContactInfo() {
    return (
        <div className="container">
            <h2>Contact</h2>
            <div>
                <Contact contact="albuquerque" Icon={MdOutlineMailOutline} />
                <Contact contact="github/MD2SA" Icon={FaGithub} />
                <Contact contact="albuquerque" Icon={FaLocationDot} />
                <Contact contact="albuquerque" Icon={FaPhoneAlt} />
            </div>
        </div>
    );
}
