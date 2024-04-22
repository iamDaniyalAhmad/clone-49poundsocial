import React from 'react'

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
        
    ]
  return (
    <div className="process-section">
        <h3 className='text-center main-heading'>How Does It Work?</h3>
        <p className='text-center para'>Dive In Today—It's A Piece Of Cake.</p>
        <div className="process-content container">
            <div className="row">
                {
                    steps.map((step) =>
                    <div className='process-step col-md-4'>
                        
                    <h4 className='text-center'>{step.num}</h4>
                    <h5 className='text-center'>{step.title}</h5>
                    <p className='text-center'>{step.desc}</p>   
                    </div>
                )
                }
            </div>
        </div>
    </div>
  )
}

export default Process
