export default async function getUserPost(userId:string) {
    const response = await fetch (`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

    if(!response.ok) return undefined
    return response.json()
}

