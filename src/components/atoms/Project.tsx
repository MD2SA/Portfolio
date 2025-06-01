

export default function Project({ title, img }: { title: string, img: string }) {
    return (
        <div>
            <h3>{title}</h3>
            <img src={img} />
        </div>
    );
}
