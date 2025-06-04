import "../../css/TimeLine.css"

const events: { title: string, description: string }[] = [
    {
        title: "Junior Achievment",
        description: "Development and execution of a business plan\nData estimation and interpretation\nProblem- solving and teamwork ",
    },
    {
        title: "High School, CSJB",
        description: "Studied at Colégio São João de Brito, where I got the grade 17/20",
    },
    {
        title: "University, ",
        description: "",
    },
    {
        title: "CTF",
        description: "",
    },
    {
        title: "Excel",
        description: "",
    },
]

export default function TimeLine() {
    return (
        <div className="timeline">
            <div className="timeline-line" />
            {events && events.map((event, index) => (
                <div className="timeline-item" key={`${index}-${event.title}`}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-content left">
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
