import React, { useEffect, useState } from 'react'
import data from '../projects.json'

export default function About() {

    let {id} = useParams()
    let [post, setPost] = useState()

    async function fetchData() {
        try{
            let response = await fetch(`http://localhost:5174/about/${id}`)

            if(!response.ok){
                throw new Error("Қате");
                
            }

            let data = await  response.json()
            console.log(data);
            
            setPost(data)

        }catch(err){
            console.error(err);
            
        }
        
    }
    useEffect(()=>{
        fetchData()
    },[id])
    


    if (post) {
        return (
            <div>
                <h2>Толық ақпарат</h2>
                <div>
                    <h2>{post.name}</h2>
                </div>


      
            </div>
        )
    }
  
}
