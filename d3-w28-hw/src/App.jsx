import React from 'react'
import './App.css'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import About from './pages/About'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/project' element={<Project/>} />
          <Route path='/about:id' element={<About/>} />
        </Routes>
      </BrowserRouter>
      
      
      
    </>
  )
}

export default App
