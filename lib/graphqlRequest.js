export default async function graphqlQuery(query){
    const url = "http://localhost/wordpressnextjs/graphql"
    const headers = {'Content-type': 'application/json'}

    const res = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(query)
    })

    const resJson = await res.json()
    return resJson

}