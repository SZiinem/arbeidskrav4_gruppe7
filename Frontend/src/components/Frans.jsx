import { useEffect, useState } from "react"
import client from "../helpers/client"
import "../style/frans.css"

export default function Frans(){

    const [sanityFrans, setSanityFrans] = useState(null)

    useEffect(() => {
        async function fetchFrans(){
            const onlyFrans = await client.fetch("*[_type == 'person' && name == 'Frans N. Naas'][0]{_id, 'imageURL': medlemimage.asset->url, name, email, course}")
            setSanityFrans(onlyFrans)
        }
        fetchFrans()
    }, [])

    console.log(sanityFrans)

    return(
        <article className="frans-card">
            <img src={sanityFrans?.imageURL} alt="Profilbilde" />
            <h3>{sanityFrans?.name}</h3>
            <a href={`mailto:${sanityFrans?.email}`}>{sanityFrans?.email}</a>
            <p>{sanityFrans?.course}</p>
        </article>
    )
}