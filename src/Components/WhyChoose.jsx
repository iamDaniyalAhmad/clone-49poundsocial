import React from 'react';

const WhyChoose = (props) => {
  return (
    <div className="h-full min-w-full md:mb-[-50px] 2xl:mb-[-250px]">
      <div className="md:flex justify-between mt-16">
        <div className="md:w-1/2 md:pr-0 pr-3">
          <img src={props.why.url} alt="" className="w-[97%] h-[100%] md:h-[80%] 2xl:h-[60%] rounded-r-lg" />
        </div>
        <div className="md:w-1/2 p-2">
          <h3 className='font-semibold pt-2 text-2xl '>Why Choose us?</h3>
          <div className='flex mt-3 md:pt-10'>
            <div className='veritcal-line h-30 border-1 border-[#f7b141]'></div>
          <h3 className='text md:text-4xl 2xl:pr-[200px]  text-3xl pl-2 pt-1 font-bold'>{props.why.title}</h3>
          </div>
          <p className='mt-3 md:text-xl 2xl:pt-10 2xl:pr-60'>{props.why.description}</p>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
