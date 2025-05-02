import React from 'react'
import './App.css'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

let apiKey = import.meta.env.VITE_GEMINI_API_KEY

function App() {
  let [send, setSend] = useState('')
  let [userInput, setUserInput] = useState('')
  let [error, setError] = useState('')
  let [answerToggle, setAnswerToggle] = useState('')

  useEffect(()=>{
    let savedInput = localStorage.getItem('gemini_userinput')
    let savedanswer = localStorage.getItem('gemini_answer')
    if(savedInput){
      setUserInput(savedInput)
    }
    if(savedanswer){
      setAnswerToggle(savedanswer)
    }
  },[])

  let handleSubmit = async (e)=>{
    e.preventDefault()
    try{
      setAnswerToggle('')
      let response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          contents: [{ parts: [{ text: userInput }] }]
        },
        {
            headers: { 'Content-Type': 'application/json' }
        }
      )
      let answer = response.data.candidates?.[0]?.content?.parts?.[0]?.text
      setAnswerToggle(answer)
      
      localStorage.setItem('gemini_userInput', userInput)
      localStorage.setItem('gemini_answer', answer)
      
      setUserInput('')

      if(answer){setSend(userInput)}



    }catch(err){
      setError(err.message)  
      setUserInput('')
    
    }

  }

  return (
    <>
    <h1>Gemini Chat</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Вопросы?' onChange={(e)=>setUserInput(e.target.value)} value={userInput}/>
      <button type='submit'>Send</button>
    </form>

    {send && 
      <div>
        <strong>You:</strong>{send}
      </div>

    }

    {answerToggle &&
      <div className='get mt-10 p-4 bg-gray-100 rounded-xl w-[60%] shadow'>
          <strong>Gemini:</strong> {answerToggle}
      </div>
    }

    {error &&
      <div className='text-red-600 mt-4'>
          Error: {error}
      </div>
    }
    </>
  )
}

export default App
