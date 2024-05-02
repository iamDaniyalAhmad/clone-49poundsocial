import React from 'react';

const About = () => {
  return (
    <div className="container mt-16">
      <h2 className='text-center md:text-5xl text-4xl font-bold'>Quality Doesn't Have To Break The Bank.</h2>
      <div className="md:flex justify-center mt-5">
        <div className="md:w-1/2">
          <p className='font-bold text-xl md:text-[25px] md:mt-11'>At 49 Pound Social, we believe in delivering top-notch quality without the hefty price tag. With our affordable rates, you can enjoy premium services that won't break the bank.</p>
          <p className='my-5 text-xl md:text-[20px]'>In today’s busy business world, managing social media can be a challenge. Our dedicated team handles your social media presence, allowing you to focus on your core operations while we ensure your brand stays active and engaged online. Let us take care of your social media, so you can focus on growing your business.</p>
          <a href='/' className=' bg-[#f7b141] text-[#024963] font-bold rounded-md py-2.5 md:px-5 px-4 text-md'>GET STARTED</a>
        </div>
        <div className="md:w-1/2 md:mt-5 mt-20">
          <img src="images/digital-boost.webp" alt="" className="w-72 mx-auto" />
        </div>
      </div>
    </div>
  )
}

export default About;
