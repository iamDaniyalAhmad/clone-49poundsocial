import React from 'react'

const WhyOpposite = (props) => {
  return (
    <div className="container-fluid whyOpposite">
        <div className="whychoose-content whyOpposite-content row">
            <div className="whychoose-text col-md-6">
                 <h3 className='main'>Why Choose us?</h3> 
                 <div className='veritcal-line'></div>
                 <h3 className='text'>{props.why.title}</h3>  
                 <p>{props.why.description}</p>
            </div>
            <div className="whyOpposite-image col-md-6">
               <img src={props.why.url} alt="" />
            </div>
        </div>
    </div>
  )
}

export default WhyOpposite
