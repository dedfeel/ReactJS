import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/About'
import Profile from './pages/Profile'
import Project from './pages/Project'


function App() {


  return (
    <div className='body'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/project' element={<Project/>}/>

        </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
