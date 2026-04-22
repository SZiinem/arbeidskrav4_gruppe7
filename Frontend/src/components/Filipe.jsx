import { useEffect, useState } from "react"
import client from "../helpers/client"
import "../style/filipe.css"

export default function Filipe({ }) {

    const [filipeSanity, setFilipeSanity] = useState(null)

    useEffect(() => {
        async function fetchSanityFilipe() {
            const sanityFilipe = await client.fetch("*[_type == 'person' && name == 'Filipe Amador']{_id, 'imageURL': medlemimage.asset->url, name, email, course}")
            setFilipeSanity(sanityFilipe[0])
        }
        fetchSanityFilipe()
    }, [])

    console.log(filipeSanity)
    return (
        <article className="FilipeCard">
            <img src={filipeSanity?.imageURL} alt={filipeSanity?.name} />
            <h3>{filipeSanity?.name}</h3>
            <a href={`mailto:${filipeSanity?.email}`}>{filipeSanity?.email}</a>
            <p>{filipeSanity?.course}</p>
        </article>
    )
}