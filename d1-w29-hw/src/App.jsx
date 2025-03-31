import React from 'react'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Comment from './pages/Comment'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='comment' element={<Comment/>}/>

        </Routes>
      
      </BrowserRouter>


    </>
  )
}

export default App
