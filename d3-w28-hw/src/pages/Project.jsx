import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom';
import data from '../projects.json'


export default function Project() {
   
  return (
    <div>
        <div>
        {data.map((element)=>{
            return <div key={element.id}>
                <h1>{element.name}</h1>
                <Link to={`/about/${element.id}`}>Толығырақ</Link>

            </div>
        })}

      
    </div>

      
    </div>
  )
}
