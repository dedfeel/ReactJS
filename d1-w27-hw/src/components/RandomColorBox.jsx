import React, { useState } from 'react';
import '../index.css';

export default function App() {
  let [color, setColor] = useState('#ffffff');

  let getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  };

  let changeColor = () => {
    setColor(getRandomColor());
  };

  return (
    <div className='container'>
        <div className='box' style={{ backgroundColor: color, width: '200px', height: '200px', margin: '20px auto', borderRadius: '10px' }}></div>
        
        <button onClick={changeColor} className='btn'>Tusti ozgertu</button>
    </div>
  );
}
