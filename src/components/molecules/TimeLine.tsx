import "../../css/TimeLine.css"

const events: { title: string, complement?: string, description: string }[] = [
    {
        title: "Cybersecurity Competition – FISTA",
        description: "Participated in a Capture The Flag (CTF) cybersecurity competition. Solved challenges involving cryptography, web exploitation, reverse engineering and system vulnerabilities",
    },
    {
        title: "Junior Achievement Program",
        description: "Developed and executed a business plan as part of an entrepreneurship program. Activities included data estimation and interpretation, problem-solving and teamwork",
    },
    {
        title: "Bachelor's in Computer Science and Business Management – ISCTE-IUL",
        complement: "Grade: 17/20",
        description: "Currently in the 3rd year of a 4-year degree program. Studying key topics in computer science such as algorithms, data structures, databases and programming, along with business subjects including finance, accounting and project evaluation",
    },
    {
        title: "Advanced Excel Certificate – ISCTE-IUL",
        complement: "Grade: 19/20",
        description: "Completed an advanced Excel course where advanced features such as pivot tables, dynamic formulas, data validation, and conditional formatting were covered",
    },
    {
        title: "High School – Colégio São João de Brito",
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
                    <div className="timeline-content left">
                        <h3 className="timeline-title">{event.title}</h3>
                        <small className="timeline-complement">{event.complement}</small>
                        <p className="timeline-text">{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
