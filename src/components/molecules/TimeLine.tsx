import "../../css/TimeLine.css"

const events: { title: string, time: string, complement?: string, description: string, url?: string }[] = [
    {
        title: "BSc in Computer Science and Business Management – ISCTE-IUL",
        time: "now",
        complement: "Grade: 17/20",
        description: "Currently starting the 3rd year of a 4-year degree program. Studying key topics such as algorithms, data structures and databases, along with finance, accounting and project evaluation",
        url: "https://www.iscte-iul.pt/degree/code/9189/bachelor-degree-in-computer-science-and-business-management/studyplan",
    },
    {
        title: "Cybersecurity Competition – FISTA",
        time: "Mar 2025",
        description: "Participated in a Capture The Flag (CTF) cybersecurity competition. Solved challenges involving cryptography, web exploitation, reverse engineering and system vulnerabilities",
        url: "https://fista.iscte-iul.pt/concursos/ctf",
    },
    {
        title: "Advanced Excel Certificate – ISCTE-IUL",
        time: "Jan 2024",
        complement: "Grade: 19/20",
        description: "Completed advanced Excel training covering pivot tables, dynamic formulas, data validation, and conditional formatting",
    },
    {
        title: "Junior Achievement Program",
        time: "Apr 2023",
        description: "Developed and executed a business plan as part of an entrepreneurship program. Activities included data estimation and interpretation, problem-solving and teamwork",
        url: "https://www.japortugal.org/",
    },
    {
        title: "High School – Colégio São João de Brito",
        time: "Jul 2023",
        complement: "Grade: 17/20",
        description: "Completed secondary education at Colégio São João de Brito where i choose to follow the Sciences track",
    },
];

export default function TimeLine() {
    return (
        <div className="timeline">
            <div className="timeline-line" />
            {events && events.map((event, index) => (
                <div className="timeline-item" key={`${index}-${event.title}`}>
                    <div className="timeline-dot"></div>
                    <div className="glass-card timeline-content">
                        <h3 className="timeline-title">{event.title}</h3>
                        <div className="timeline-more-container">
                            <small className="timeline-complement">{event.complement}</small>
                            {event.time && <small className="timeline-date">{event.time}</small>}
                        </div>
                        <p className="timeline-text">
                            {event.description}
                            {event.url && <> - <a href={event.url} target="_blank" className="timeline-link">more</a></> }
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
