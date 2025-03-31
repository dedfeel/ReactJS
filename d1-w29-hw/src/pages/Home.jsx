import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

    const[email, setEmail] = useState()
    const[name, setName] = useState()
    const[error, setError] = useState()
    const[comm, setComm] = useState()

    const [rating, setRating] = useState("");
    const [comment, setComment] = useState("");


    let nameRegex = /^[A-Za-zА-Яа-яЁёҰұҮүҚқҒғӨөҺһІіӘә\s'-]+$/


    const handleSubmit = (e)=>{
        e.preventDefault()

        if(!nameRegex.test(name)){
            setError('Атыңыз міндетті түрде әріптерден тұруы керек')
            return
        }
        
        if(!email.includes('@')){
            setError('Email-ді қайта дұрыс енгізіңіз!')
            return
        }

        if(comm.length < 20 ){
            setError('Пікір 20 әріптен тұру керек')
            return
        }

        if (rating === "Жақсы" && comment.length < 10) {
            setError("Пікір кемінде 10 әріптен тұру керек");
            return;
        }

        setError('')
        

    }

  return (
    <div>
        <h1>Кері байланыс формасы </h1>    
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="text">Аты-жөні</label>
                <input type="text" 
                name='text'
                placeholder='Name'
                onChange={(e)=>setName(e.target.value)}
                required />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text"
                name='email'
                placeholder='Name'
                onChange={(e)=>setEmail(e.target.value)}
                required
                />
            </div>
            <div>
                <label htmlFor="com">Пікіріңіз</label>
                <textarea name="com"
                 id=""
                 onChange={(e)=>setComm(e.target.value)}
                 required
                 ></textarea>
            </div>
            <div>
                <label >Бағаңызды қойыныз</label>
                <select value={rating} onChange={(e) => setRating(e.target.value)} required>
                    <option value="Өте жақсы">Өте жақсы</option>
                    <option value="Жақсы">Жақсы</option>
                </select>
            </div>
            {rating === "Жақсы" && (
                    <div>
                        <label>Неліктен төмен баға, пікіріңіз</label>
                        <textarea 
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            required
                        ></textarea>
                    </div>
                )}
            <button type='submit'>Жіберу</button>
            {error && <p style={{color: "red"}}>{error}</p>}

        </form>  
        

    </div>
  )
}
