import React from 'react'
import { Rating } from 'react-simple-star-rating'


const Client = () => {
    
    const testimonial = [
        {
            review: "Been with 49 Pound Social for 2 years now. First, they set up our website, then handled our socials. Now, they're onto SEO and blogs. Great team to work with, I highly recommend using them for budget and quality.",
            author: "MICK ELLIS",
            role:"Taxi Company Owner"
        },
        {
            review:"Thanks to 49, our beauty academy's online presence has soared! From building our stunning website to expertly managing social media and meta ads, they've been instrumental in our success. Couldn't be happier!",
            author: "DANIELLE DOWNES",
            role:"Beauty Academy owner"
        },
        {
            review: "Super happy with the social media management and website they set up for our cleaning business! Quick responses, awesome ideas, and they nailed our style. Our online presence is top-notch now. Definitely recommend!",
            author: "WALTER FIELDS",
            role:"Student"
        },
        {
            review: "Big shoutout for their outstanding work! They not only created an amazing website for our valeting business but also handled all our social media management and facebook ads. Their expertise has been invaluable.",
            author: "EDDIE",
            role:"Car Valet Owner"
        },
    ]
  return (
    <div className="client-section">
        <p className='client-para text-center'>What Some Of Our Clients Say.......</p>
        <h5 className='text-center client-heading'>Don’t Just Take Our Word For It</h5>
        <div className="client-content container">
            <div className="row cards">
                {
                    testimonial.map((test) => 
                    <div className="col-md-6 card">
                        <Rating initialValue={5} size={25}/>
                        <p className='review'>{test.review}</p>
                        <h6>{test.author}</h6>
                        <p className='role'>{test.role}</p>
                    </div>

                )
                }
            </div>
        </div>
    </div>
  )
}

export default Client
