export default function Concept({ concept }) {
    return (
        <li key={concept.title} className="concept">
            <img src={concept.image} alt={concept.description} />
            <h2>{concept.title}</h2>
            <p>{concept.description}</p>
        </li>
    );
}
