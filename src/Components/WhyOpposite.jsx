import React from 'react';

const WhyOpposite = (props) => {
  return (
    <div className=" bg-[#024963] text-white mt-5 py-10  overflow-hidden 2xl:py-0">
      <div className="md:flex md:mb-[-50px] 2xl:mb-[-250px]">
        <div className=" md:w-1/2 py-20 px-3 md:px-10">
          <h3 className='font-semibold pt-2 text-2xl '>Why Choose us?</h3>
          <div className='flex '>
          <div className='veritcal-line border-1 border-[#f7b141] h-32'></div>
          <h3 className='text md:text-4xl 2xl:pr-[200px] pt-1  text-3xl pl-2 font-bold'>{props.why.title}</h3>
          </div>
          <p className='pt-5 mt-3 md:text-xl 2xl:pt-10 2xl:pr-40'>{props.why.description}</p>
        </div>
        <div className="md:w-1/2 md:mt-10  flex justify-end">
          <img src={props.why.url} alt="" className="w-[97%] h-[100%] md:h-[80%] 2xl:h-[60%]  rounded-l-lg" />
        </div>
      </div>
    </div>
  );
}

export default WhyOpposite;
