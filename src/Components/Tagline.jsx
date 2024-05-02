import React from 'react'
import {Cursor,useTypewriter} from 'react-simple-typewriter'

const Tagline = () => {
    const [text] = useTypewriter({
        words: [' Reliable ', ' Affordable ' , ' Creative '],
        loop:{},
        typeSpeed:120,
        deleteSpeed:100

    })
  return (
    <div className="mt-16">
  <div className="text-center bg-[#024963] text-white py-10 text-3xl md:text-5xl font-bold">
    <h2>
      A Social Media Company That's<span className="font-bold text-[#f7b141]">{text}</span> <span className="text-black"><Cursor/></span>
    </h2>
  </div>
</div>

  )
}

export default Tagline
