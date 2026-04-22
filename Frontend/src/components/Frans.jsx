import { useEffect, useState } from "react"
import client from "../helpers/client"
import "..style/frans.css"

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
        <article className="frans-Card">
            <h1>{sanityFrans?.name}</h1>
            <img src={sanityFrans?.imageURL} alt="Bilde av hund" className="frans-bilde" />
            <a href="">{sanityFrans?.email}</a>
            <p>{sanityFrans?.course}</p>
        </article>
    )
}