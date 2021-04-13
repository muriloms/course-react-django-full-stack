const TOKEN = "e8a1ae2ff30f512b375ef2b32070e1b3430f66dd"

export default class API
{

    static updateMovie(mov_id, body)
    {
        return fetch(`http://127.0.0.1:8000/api/movies/${mov_id}/`,{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`
                },
                body: JSON.stringify(body)
            })
            .then(resp=>resp.json())
            
    }
    static createMovie(body)
    {
        return fetch(`http://127.0.0.1:8000/api/movies/`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`
                },
                body: JSON.stringify(body)
            })
            .then(resp=>resp.json())
            
    }
}