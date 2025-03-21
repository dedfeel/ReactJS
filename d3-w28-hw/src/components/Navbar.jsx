import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

export default function Navbar() {
  return (
    <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/project'}>Project</Link>
        <Link to={'/'}>About me</Link>
    </div>
  )
}
