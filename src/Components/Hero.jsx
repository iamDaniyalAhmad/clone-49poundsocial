import React from 'react';

const Hero = () => {
  return (
    <div className=" bg-[#024963]">
      <div className="container md:flex justify-between items-center md:py-24">
        <div className="md:w-2/3 p-2">
          <h1 className="text-white text-4xl md:text-7xl font-bold pt-5">Affordable Social Media Management.</h1>
          <p className="text-[#f7b141] text-2xl mt-2 font-bold mb-10">From Only £49 Per Month.</p>
          <a href='/' className=' bg-[#f7b141] text-[#024963] font-bold rounded-md py-2 md:px-5 px-3 text-md'>BOOK A CALL</a>
          <a href='/' className='ml-3 bg-white text-[#024963] border  font-bold rounded-md py-2 md:px-5 px-3 text-md'>GET STARTED</a>
        </div>
        <div className="md:w-1/3 md:ml-12 mt-5">
          <img src="images/social-media-creative-posts.jpg" alt="" className="w-72 pl-5" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
