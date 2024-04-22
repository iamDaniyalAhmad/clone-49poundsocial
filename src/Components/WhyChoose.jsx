import React from 'react'

const WhyChoose = (props) => {
  return (
    <div className="whychoose-section">
        <div className="whychoose-content row">
            <div className="whychoose-image col-md-6">
               <img src={props.why.url} alt="" />
            </div>
            <div className="whychoose-text col-md-6">
                 <h3 className='main'>Why Choose us?</h3> 
                 <div className='veritcal-line'></div>
                 <h3 className='text'>{props.why.title}</h3>  
                 <p>{props.why.description}</p>
            </div>
        </div>
    </div>
  )
}

export default WhyChoose
