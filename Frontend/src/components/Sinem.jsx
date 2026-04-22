import { useEffect, useState } from "react"
import client from "../helpers/client"
import '../style/sinem.css'

export default function Sinem({ }) {


    const [sanitySinem, setSanitySinem] = useState(null)

    useEffect(() => {
        async function fetchAllSinem() {
            const allSinem = await client.fetch("*[_type == 'person']{_id, 'image': medlemimage.asset->url, name, email, course}")
            setSanitySinem(allSinem[1])
        }
        fetchAllSinem()
    }, [])

    console.log(sanitySinem)
   
   
    return(
        <>

        {sanitySinem &&
            (<article className="sinem">
                <img src={sanitySinem.image ? sanitySinem.image : "https://placehold.co/300x300?text=Bilde+kommer"} alt="s.name"></img>
                <h3>{sanitySinem.name}</h3>
                <p>{sanitySinem.course}</p>
                <a href={`mailto:${sanitySinem.email}`}>{sanitySinem.email}</a>
            </article>)}
        </>
    )
}