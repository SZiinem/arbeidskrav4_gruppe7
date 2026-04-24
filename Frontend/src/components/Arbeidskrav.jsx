import { useEffect, useState } from "react"
import client from "../helpers/client"
import ArbeidskravCard from "./ArbeidskravCard"


export default function Arbeidskrav({ }) {

    const [sanityArbeidskrav, setSanityArbeidskrav] = useState(null) //Lagrer ting fra sanity

    useEffect(() => {
        async function fetchAllArbeidskrav() {
            const allArbeidskrav = await client.fetch("*[_type == 'arbeidskrav']{_id, title, description}")
            setSanityArbeidskrav(allArbeidskrav)
        }
        fetchAllArbeidskrav()
    }, [])

    console.log(sanityArbeidskrav)
    return (

        <div id="arbeidskrav-list">
            {sanityArbeidskrav?.map(a => <ArbeidskravCard key={a._id} a={a} />)}
        </div>

    )
}