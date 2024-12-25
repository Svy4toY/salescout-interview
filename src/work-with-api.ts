// Write a function that makes a GET request to the JSONPlaceholder API and 
// returns posts that are longer than 100 characters.

// API URL: https://jsonplaceholder.typicode.com/posts
// Use axios library
import axios from 'axios';

type APIResponseType = {
    id: number,
    userId: number
    title: string,
    body: string,
}

async function fetchLongPosts(): Promise<APIResponseType[]> {
    try {
        const response = await axios.get<APIResponseType[]>('https://jsonplaceholder.typicode.com/posts');
        
        let longPosts: APIResponseType[] = [];
        response.data.map((object)=>{
            if (object.body.length >= 12){
                longPosts.push(object);
            }
        })

        return longPosts;
    } catch (error) {
        console.log(error);
        return []; 
    }
}

module.exports = { fetchLongPosts }