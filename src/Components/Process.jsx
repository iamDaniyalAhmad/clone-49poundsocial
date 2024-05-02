import React from 'react';

const Process = () => {
  const steps = [
    {
      num : 1,
      title : "CHOOSE YOUR DESIRED PLAN",
      desc: "Pick the package that suits you best. Add any extras you fancy."
    },
    {
      num : 2,
      title : "COMPLETE INTAKE FORM",
      desc: "Fill out the questionnaire about your brand and target audience."
    },
    {
      num : 3,
      title : "GET ON-BRAND CONTENT",
      desc: "Get top-notch posts within 7 working days."
    },
  ];

  return (
    <div className=" bg-[#024963] text-white md:mt-[200px]">
      <h3 className='text-center text-5xl font-bold mt-16 py-10'>How Does It Work?</h3>
      <p className='text-center text-3xl font-bold'>Dive In Today—It's A Piece Of Cake.</p>
      <div className="container mt-16 pb-16">
        <div className="md:flex flex-wrap">
          {steps.map((step, index) => (
            <div key={index} className=' flex-1 text-center py-8'>
              <h4 className='text-[#f7b141] text-8xl font-bold'>{step.num}</h4>
              <h5 className='font-bold text-xl'>{step.title}</h5>
              <p className='opacity-50 text-lg'>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Process;
