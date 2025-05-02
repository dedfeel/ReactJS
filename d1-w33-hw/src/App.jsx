import React from 'react'
import './index.css'
import foto1 from './assets/foto1.png'


export default function App() {
  return (
    <div className='p-10'>
      <div className='flex justify-center gap-10 '>
        <h2 className='border-2 rounded-lg w-30 flex justify-center'>All</h2>
        <h2 className='border-2 rounded-lg w-30 flex justify-center'>Category</h2>
        <h2 className='border-2 rounded-lg w-30 flex justify-center'>Collection</h2>
        <h2 className='border-2 rounded-lg w-30 flex justify-center'>Price</h2>
      </div>
      <div className='grid grid-cols-1 m-50 justify-center items-center gap-15
                      lg:grid-cols-4
                      md:grid-cols-3
                      sm:grid-cols-2'>
        <div className='shadow-lg w-full h-90 rounded-lg flex flex-col justify-center items-center   '>
          <img className='w-50 rounded-lg' src={foto1} alt="" />
          <h2>Sun-Glass</h2>
          <p className='text-gray-400'>Current bid</p>
          <div className='flex items-center justify-center gap-5 m-2'>
            <h4>1,75</h4>
            <button className='bg-black text-white w-29 h-10 rounded-lg hover:bg-gray-700'>Place bid</button>  
          </div>
        </div>
        <div className='shadow-lg w-full h-90 rounded-lg flex flex-col justify-center items-center'>
          <img className='w-50 rounded-lg' src={foto1} alt="" />
          <h2>Sun-Glass</h2>
          <p className='text-gray-400'>Current bid</p>
          <div className='flex items-center justify-center gap-5 m-2'>
            <h4>1,75</h4>
            <button className='bg-black text-white w-29 h-10 rounded-lg hover:bg-gray-700'>Place bid</button>  
          </div>
        </div>
        <div className='shadow-lg w-full h-90 rounded-lg flex flex-col justify-center items-center'>
          <img className='w-50 rounded-lg' src={foto1} alt="" />
          <h2>Sun-Glass</h2>
          <p className='text-gray-400'>Current bid</p>
          <div className='flex items-center justify-center gap-5 m-2'>
            <h4>1,75</h4>
            <button className='bg-black text-white w-29 h-10 rounded-lg hover:bg-gray-700'>Place bid</button>  
          </div>
        </div>
        <div className='shadow-lg w-full h-90 rounded-lg flex flex-col justify-center items-center'>
          <img className='w-50 rounded-lg' src={foto1} alt="" />
          <h2>Sun-Glass</h2>
          <p className='text-gray-400'>Current bid</p>
          <div className='flex items-center justify-center gap-5 m-2'>
            <h4>1,75</h4>
            <button className='bg-black text-white w-29 h-10 rounded-lg hover:bg-gray-700'>Place bid</button>  
          </div>
        </div>
        <div className='shadow-lg w-full h-90 rounded-lg flex flex-col justify-center items-center'>
          <img className='w-50 rounded-lg' src={foto1} alt="" />
          <h2>Sun-Glass</h2>
          <p className='text-gray-400'>Current bid</p>
          <div className='flex items-center justify-center gap-5 m-2'>
            <h4>1,75</h4>
            <button className='bg-black text-white w-29 h-10 rounded-lg hover:bg-gray-700'>Place bid</button>  
          </div>
        </div>
        <div className='shadow-lg w-full h-90 rounded-lg flex flex-col justify-center items-center'>
          <img className='w-50 rounded-lg' src={foto1} alt="" />
          <h2>Sun-Glass</h2>
          <p className='text-gray-400'>Current bid</p>
          <div className='flex items-center justify-center gap-5 m-2'>
            <h4>1,75</h4>
            <button className='bg-black text-white w-29 h-10 rounded-lg hover:bg-gray-700'>Place bid</button>  
          </div>
        </div>
        <div className='shadow-lg w-full h-90 rounde3d-lg flex flex-col justify-center items-center'>
          <img className='w-50 rounded-lg' src={foto1} alt="" />
          <h2>Sun-Glass</h2>
          <p className='text-gray-400'>Current bid</p>
          <div className='flex items-center justify-center gap-5 m-2'>
            <h4>1,75</h4>
            <button className='bg-black text-white w-29 h-10 rounded-lg hover:bg-gray-700'>Place bid</button>  
          </div>
        </div>
        <div className='shadow-lg w-full h-90 rounded-lg flex flex-col justify-center items-center'>
          <img className='w-50 rounded-lg' src={foto1} alt="" />
          <h2>Sun-Glass</h2>
          <p className='text-gray-400'>Current bid</p>
          <div className='flex items-center justify-center gap-5 m-2'>
            <h4>1,75</h4>
            <button className='bg-black text-white w-29 h-10 rounded-lg hover:bg-gray-700'>Place bid</button>  
          </div>
          
        </div>
      </div>

      <div>
        
      </div>
    </div>

  )
}
