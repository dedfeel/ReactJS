import React from 'react'
import '../index.css'
import { useNavigate } from 'react-router-dom'



export default function Profile() {
    const navigate = useNavigate()
    let homeBtn = () =>{
        navigate('/')
    }
  return (
    
    <div className='section1'>

        <div className='boxBio'>
            <h1>Berik Aziz</h1>
            <h3>baziz@gmail.com</h3>
            <h1>AMJILT Cyber Academy</h1>
        </div>
        <button className='btn' onClick={homeBtn}>Home бетіне өту</button>
      
    </div>
  )
}
