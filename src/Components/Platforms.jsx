import React from 'react'

const Platforms = () => {
    const cards = [
        {photo: 'images/1.webp'},
        {photo: 'images/2.webp'},
        {photo: 'images/3.webp'},
        {photo: 'images/4.webp'},
        {photo: 'images/5.webp'}

    ]
  return (
    <>
        <h5 className='text-center platform-heading'>Platforms We Use To Drive Client Success.</h5>
    <div className="slider">
        <div className="slide-track">
            <div className="slide">
                <img src="images/1.webp" alt="" />
            </div>
            <div className="slide">
                <img src="images/2.webp" alt="" />
            </div>
            <div className="slide">
                <img src="images/3.webp" alt="" />
            </div>
            <div className="slide">
                <img src="images/4.webp" alt="" />
            </div>
            <div className="slide">
                <img src="images/5.webp" alt="" />
            </div>
            <div className="slide">
                <img src="images/1.webp" alt="" />
            </div>
            <div className="slide">
                <img src="images/2.webp" alt="" />
            </div>
            <div className="slide">
                <img src="images/3.webp" alt="" />
            </div>
            <div className="slide">
                <img src="images/4.webp" alt="" />
            </div>
            <div className="slide">
                <img src="images/5.webp" alt="" />
            </div>
                
        </div>
        
    </div>
    </>
  )
}

export default Platforms