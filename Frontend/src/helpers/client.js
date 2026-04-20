import { createClient } from '@sanity/client'

const client = createClient({
    projectId: "0pjs917n",
    dataset: "production",
    useCdn: true,
    apiVersion: "2026-04-20"
})

export default client