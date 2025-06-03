import { Link } from "react-router-dom";
import "../../css/Description.css"

export default function Description() {
    return (
        <div className="">
            <h1 className="description-title">Computer Science & Business Student - ISCTE</h1>
            <div className="description-container description-content">
                <p className="description-text">
                    I’ve just completed my second year in Computer Science and Business Management at ISCTE.
                    I’m passionate about writing clean, reliable code and developing secure, scalable,
                    and high-performance solutions. Beyond the technical side, I’m deeply
                    interested in the intersection of technology, business, and finance,
                    always looking for ways to bridge them through software.
                    I enjoy learning, experimenting, and turning ideas into real, valuable products.
                </p>
            </div>
            <Link to={"/academic"}>➥Checkout my academic progress</Link>
        </div>
    );
}
