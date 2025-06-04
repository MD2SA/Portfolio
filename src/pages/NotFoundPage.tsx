import "../css/NotFound.css"

export default function NotFoundPage() {
    return (
        <div className="notfound-container">
            <h1 className="notfound-errorCode">404</h1>
            <h2 className="notfound-title">Page Not Found</h2>
            <p className="notfound-message">
                The page you're looking for doesn't exist or has been moved.
                Let's get you back to familiar territory.
            </p>
            <a href="/" className="notfound-button">Return Home</a>
        </div>
    );
}
