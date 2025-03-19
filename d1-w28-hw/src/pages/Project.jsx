import React from 'react'
import "../index.css"
import { useNavigate } from 'react-router-dom'

export default function Project() {
    const navigate = useNavigate()

    const homeBtn = ()=>{
        navigate('/')
    }
  return (
    <div className='section1'>
        <h1>My project</h1>
        <div className='boxLink'>
            <h1>AUDI</h1>
            <h1>Job.kz</h1>
            <h1>My keys</h1>
        </div>
      <button className='btn' onClick={homeBtn}>Home Бетіне өту</button>
    </div>
  )
}
