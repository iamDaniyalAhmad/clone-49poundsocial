import React from 'react'

const WhyChoose = (props) => {
  return (
    <div className="whychoose-section">
        <div className="whychoose-content">
            <div className="whychoose-image">
               <img src={props.why.url} alt="" />
            </div>
            <div className="whychoose-text">
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
