import { description } from "../../assets/constants";

export default function Description() {
    return (
        <div className="description-container">
            <h1 className="description-title">{description.title}</h1>
            <div className="glass-base description-content">
                <p className="description-text">
                    {description.text}
                </p>
            </div>
        </div>
    );
}
