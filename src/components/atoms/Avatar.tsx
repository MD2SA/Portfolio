import avatar from "../../assets/images/avatar.jpg"

export default function Avatar() {
    return (
        <div className="avatarContainer">
            <div className="avatarGlow"></div>
            <div className="avatarBorder"></div>
            <img
                src={avatar}
                className="avatarImage"
            />
            <div className="avatarShine"></div>
        </div>
    );
}
