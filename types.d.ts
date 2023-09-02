type Result ={
    pageid : string ,
    pageimage: string,
    extract: string,
    title: string,
    thumbnail?: {
        source: string,
        width: number,
        height: number,
    }

}

type SearchResult={
    query?:{
        pages?: Result[],
    }

}
/* 
type User = {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
        "street": string,
        "suite": string,
        "city": string,
        "zipcode": string,
        "geo": {
            "lat":string,
            "lng": string,
        }
    },
    "phone": string,
    "website": string,
    "company": {
      "name": string,
      "catchPhrase": string,
      "bs": string
    }
}
 */


type User ={
        "gender": string,
        "name": {
            "title": string,
            "first":string,
            "last": string
        },
        "location": {
            "street": {
                "number":number,
                "name": string
            },
            "city": string,
            "state": string,
            "country": string,
            "postcode": string,
            "coordinates": {
                "latitude": string,
                "longitude":string
            },
            "timezone": {
                "offset": string,
                "description": string
            }
        },
        "email": string,
        "login": {
            "uuid": string,
            "username": string,
        },
        "dob": {
            "date":string,
            "age": number
        },
        "registered": {
            "date":string,
            "age": number
        },
        "phone":string,
        "cell": string,
        "id": {
            "name":string,
            "value":string
        },
        "picture"?: {
            "large"?: string,
            "medium"?:string,
            "thumbnail"?:string
        },
        "nat":string
    
}
type Users={
    results:User[]
}

type userPost ={
   "userId": number,
  "id": number,
   "title": string,
    "body":string, 
}
