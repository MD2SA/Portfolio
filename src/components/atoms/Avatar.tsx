

export default function Avatar({ imageUrl, size = 250 }: { imageUrl: string, size?: number }) {
    return (
        <div className="avatarContainer" style={{ '--size': `${size}px` } as React.CSSProperties}>
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
