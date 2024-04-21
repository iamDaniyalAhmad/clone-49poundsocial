import React from 'react'
import {Cursor,useTypewriter} from 'react-simple-typewriter'

const Tagline = () => {
    const [text] = useTypewriter({
        words: ['Reliable', 'Affordable' , 'Creative'],
        loop:{},
        typeSpeed:120,
        deleteSpeed:100

    })
  return (
    <div className="tagline-section">
        <div className="tagline-content text-center">
        <h2 >
        A Social Media Company That's<span style={{fontWeight:'bold',color:'#f7b141'}}> {text}</span> <span style={{color:'black'}}><Cursor/></span>
        </h2>
        </div>
    </div>
  )
}

export default Tagline
