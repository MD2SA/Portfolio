import { events } from "../../assets/constants";

export default function TimeLine() {
    return (
        <div className="timeline">
            <div className="timeline-line" />
            {events && events.map((event, index) => (
                <div className="timeline-item" key={`${index}-${event.title}`}>
                    <div className="timeline-dot"></div>
                    <div className="glass-base glass-advanced timeline-content">
                        <h3 className="timeline-title">{event.title}</h3>
                        <div className="timeline-more-container">
                            <small className="timeline-complement">{event.complement}</small>
                            {event.time && <small className="timeline-date">{event.time}</small>}
                        </div>
                        <p className="timeline-text">
                            {event.description}
                            {event.url && <> - <a href={event.url} target="_blank" >more</a></>}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
