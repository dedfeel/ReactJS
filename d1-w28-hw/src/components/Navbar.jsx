import React from 'react'
import '../index.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='section1'>
        <h1>HOME WORK</h1>
        <div className='boxLink'>
          <Link className='section1Link btn' to={'/profile'}>Profile</Link>
          <Link className='section1Link btn' to={'/project'}>Projects</Link>
          <Link className='section1Link btn' to={'/about'}>About</Link>
        </div>
        
      
    </div>
  )
}
