import React from 'react'


const Hero = () => {
  return (
    <div className="hero-section">
        <div className="hero-content container">
          <div className="row">
            <div className="hero-text col-md-6">
                <h1>Affordable Social Media Management.</h1>
                <p>From Only £49 Per Month.</p>
                <a href='/' className='btn-book'>BOOK A CALL</a>
                <a href='/' className='btn-book btn-start mx-3'>GET STARTED</a>
            </div>
            <div className="hero-image col-md-5">
                <img src="images/social-media-creative-posts.webp" alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
