import React, { useState } from 'react'
import '../index.css'



export default function Form() {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [text, setText] = useState()
  
  const handleLogin = () => setIsLogin(true);
  const handleLogout = () => setIsLogin(false);
  const handleRegister = () => setIsRegister(true);
  const handleRegisterSubmit = (e) => {
    e.preventDefault();


    setIsRegister(false);
  }

  return (
    <div className='div'>
        {isLogin ? (
          <div>
            <h2>Бастапқы бетке қош келдіңіз</h2>
            <button className='btn' onClick={handleLogout}> Log out </button>
          </div>
        ) : isRegister ? (
          <div>
            <h2>Тіркелу</h2>
            <form onSubmit={handleRegisterSubmit}>
              <input className='btn' value={text} type="text" placeholder="Email немесе телефон"/>
              <input className='btn' value={text} type="password" placeholder="Құпия сөз"/>
              <button className='btn' type="submit">Register</button>    
            </form>
          </div>
        ) : (
          <div>
            <h2>Жүйеге кіру қажет</h2>
            <button className='btn' onClick={handleLogin}>Login</button>
            <button className='btn' onClick={handleRegister} >Register</button>
          </div>
        )}
    </div>
  );
}
