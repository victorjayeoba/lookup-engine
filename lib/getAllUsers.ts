export default async function getAllUsers(): Promise<Users>{

    const response = await fetch ("https://randomuser.me/api/?results=10")
    

/*     https://jsonplaceholder.typicode.com/posts?userId==
https://jsonplaceholder.typicode.com/users/
*/
  const data = response.json()
  
   return data
}
