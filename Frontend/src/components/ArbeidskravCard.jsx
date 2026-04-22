import "../style/alt.css"

export default function ArbeidskravCard({ a }) {

    return (
        <article className="arbeidskrav-card">
            <h3>{a.title}</h3>
            <p>{a.description}</p>


        </article>
    )
}