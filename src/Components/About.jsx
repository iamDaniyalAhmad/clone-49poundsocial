import React from 'react'

const About = () => {
  return (
    <div className="about-section container">
            <h2 className='text-center'>Quality Doesn't Have To Break The Bank.</h2>
        <div className="about-content row">
            <div className="about-text col-md-6">
                <p className='bold-para'>At 49 Pound Social, we believe in delivering top-notch quality without the hefty price tag. With our affordable rates, you can enjoy premium services that won't break the bank.</p>
                <p className='my-5'>In today’s busy business world, managing social media can be a challenge. Our dedicated team handles your social media presence, allowing you to focus on your core operations while we ensure your brand stays active and engaged online. Let us take care of your social media, so you can focus on growing your business.</p>
                <a href='/' className='btn-book'>GET STARTED</a>
            </div>
            <div className="about-image col-md-5">
                <img src="images/digital-boost.webp" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About
