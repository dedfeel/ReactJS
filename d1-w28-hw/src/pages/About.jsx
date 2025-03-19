import React from 'react'
import '../index.css'
import { useNavigate } from 'react-router-dom'


export default function About() {
    const navigate = useNavigate()
    const homeBtn =()=>{
        navigate('/')
    }
  return (
    <div className='section1'>
      <h1>Мен Берік Азиз, 2006 жылғымын. Қәзiр AMJILT Cyber school-да оқимын, бұйырса болашақта Full-stack бағдарламаушы боламын. </h1>
      <button className='btn' onClick={homeBtn}>Home бетіне өту</button>
    </div>

  )
}
