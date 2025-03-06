import React from 'react'
import './App.css'

function App() {
  
  let form = () => {
    alert('submitted')
  }

  let input = (event)=>{
    console.log(event.key.toUpperCase());  
  }

  
  

  return (
    <form onSubmit={form}>
      <input type="text" onKeyDown={input}/>
      <button type="submit">form button</button>
    </form>
  )
}

export default App
