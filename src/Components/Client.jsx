import React from 'react'
// import { Rating } from 'react-simple-star-rating'


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
    <div className="bg-[#024963] pb-10 ">
    <p className=' text-center text-3xl text-[#f7b141] pt-5'>What Some Of Our Clients Say.......</p>
    <h5 className='text-center text-6xl font-bold text-white pt-5'>Don’t Just Take Our Word For It</h5>
    <div className=" mt-16 container">
      <div className="md:flex">
        {testimonial.map((test, index) => (
          <div key={index} className=" bg-[#024963] border-2 flex flex-col items-center border-[#f7b141] rounded mt-8 mx-2 p-8  md:w-1/3  ">
            <div className='flex'>
            <img width="25" height="25" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
            <img width="25" height="25" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
            <img width="25" height="25" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
            <img width="25" height="25" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
            <img width="25" height="25" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
            {/* <Rating initialValue={5} size={25}/> */}
            </div>
            <div>
            <p className=' text-white opacity-50 text-center mt-2 text-lg'>{test.review}</p>
            <h6 className='text-[#f7b141] text-3xl text-center mt-2 font-bold'>{test.author}</h6>
            <p className=' text-[#f7b141] text-lg  text-center font-bold'>{test.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Client
