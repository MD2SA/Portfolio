

export default function Avatar({ imageUrl }: { imageUrl: string, size?: number }) {
    return (
        <div className="avatarContainer">
            <div className="avatarGlow"></div>
            <div className="avatarBorder"></div>
            <img
                src={imageUrl}
                alt="Profile"
                className="avatarImage"
            />
            <div className="avatarShine"></div>
        </div>
    );
}
