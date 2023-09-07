export default async function getQueryUsers(batchId:string): Promise<Users>{

    const response = await fetch (`https://randomuser.me/api/?results=10&seed=${batchId}`)
    

/*     https://jsonplaceholder.typicode.com/posts?userId==
https://jsonplaceholder.typicode.com/users/
*/
  const data = response.json()
  
   return data
}
