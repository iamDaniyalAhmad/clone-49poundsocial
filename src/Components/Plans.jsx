import React from 'react'
const Plans = () => {
    const plan = [
        {
            background: 'white',
            border: '2px solid #024963',
            color: '#024963',
            title: "Affordable",
            price: "£49/month",
            desc: "For startups on a tight budget.",
            Features: [
                {
                    feature: 'High-Quality Visuals',
                    include: true
                },
                {
                    feature: '2 Posts Per Week',
                    include: true
                },
                {
                    feature: 'Captions & Hashtags',
                    include: true
                },
                {
                    feature: 'Scheduling & Posting',
                    include: true
                },
                {
                    feature: 'Facebook',
                    include: true
                },
                {
                    feature: 'Instagram',
                    include: true
                },
                {
                    feature: 'Twitter',
                    include: true
                },
                {
                    feature: 'Linkedin',
                    include: false
                },
                {
                    feature: 'Tik Tok',
                    include: false
                },
                {
                    feature: 'UK-Based Content Creator',
                    include: true
                },
                {
                    feature: 'Add-On Services Available',
                    include: true
                },
                {
                    feature: 'Monthly Rolling Plan',
                    include: true
                },
                {
                    feature: 'Monthly Rolling Plan',
                    include: true
                }
            ],
            buttonBackground: '#f7b141',
            buttonColor: '#024963',
            iconColor: '#024963'
        },
        {
            background: '#f7b141',
            color: '#024963',
            border: 'none',
            title: "Value",
            price: "£99/month",
            desc: "Great for small businesses.",
            Features: [
                {
                    feature: 'High-Quality Visuals',
                    include: true
                },
                {
                    feature: '5 Posts Per Week',
                    include: true
                },
                {
                    feature: 'Captions & Hashtags',
                    include: true
                },
                {
                    feature: 'Scheduling & Posting',
                    include: true
                },
                {
                    feature: 'Facebook',
                    include: true
                },
                {
                    feature: 'Instagram',
                    include: true
                },
                {
                    feature: 'Twitter',
                    include: true
                },
                {
                    feature: 'Linkedin',
                    include: false
                },
                {
                    feature: 'Tik Tok',
                    include: false
                },
                {
                    feature: 'UK-Based Content Creator',
                    include: true
                },
                {
                    feature: 'Add-On Services Available',
                    include: true
                },
                {
                    feature: 'Monthly Rolling Plan',
                    include: true
                },
                {
                    feature: 'Monthly Rolling Plan',
                    include: true
                }
            ],
            buttonBackground: '#024963',
            buttonColor: '#fff',
            iconColor: '#024963'
        },
        {
            background: '#024963',
            color: 'white',
            border: 'none',
            title: "Ultimate",
            price: "£149/month",
            desc: "More graphics and content",
            Features: [
                {
                    feature: 'High-Quality Visuals',
                    include: true
                },
                {
                    feature: '7 Posts Per Week',
                    include: true
                },
                {
                    feature: 'Captions & Hashtags',
                    include: true
                },
                {
                    feature: 'Scheduling & Posting',
                    include: true
                },
                {
                    feature: 'Facebook',
                    include: true
                },
                {
                    feature: 'Instagram',
                    include: true
                },
                {
                    feature: 'Twitter',
                    include: true
                },
                {
                    feature: 'Linkedin',
                    include: true
                },
                {
                    feature: 'Tik Tok',
                    include: true
                },
                {
                    feature: 'UK-Based Content Creator',
                    include: true
                },
                {
                    feature: 'Add-On Services Available',
                    include: true
                },
                {
                    feature: 'Monthly Rolling Plan',
                    include: true
                },
                {
                    feature: 'Monthly Rolling Plan',
                    include: true
                }
            ],
            buttonBackground: '#fff',
            buttonColor: 'black',
            iconColor: 'white'
        }
    ]
    return (
        <div className="2xl:container 2xl:mx-auto">
            <h3 className='text-center text-4xl font-bold mt-16'>Our Social Media Management Plans.</h3>
            <p className='text-center mt-3 '>Explore our budget-friendly social media management bundles</p>
            <div className=" mt-16">
                <div className="md:flex  ">
                    {plan.map((p, index) => (
                        <div key={index} className=' 2xl:w-[450px] md:w-[31%] w-[95%] mx-auto md:mx-5 my-8 py-6 rounded-lg' style={{ background: p.background, border: p.border, color: p.color }}>
                            <h4 className='text-center text-4xl font-bold '>{p.title}</h4>
                            <h4 className='text-center text-2xl font-bold'>{p.price}</h4>
                            <p className='text-center mb-3'>{p.desc}</p>
                            {p.Features.map((f, i) => (
                                <p key={i} className='flex ml-5 md:pb-2 mb-1'> {f.include === true ? <svg aria-hidden="true" fill={p.iconColor} className="e-font-icon-svg e-far-check-circle w-[20px] mx-2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg> : <svg aria-hidden="true" className="e-font-icon-svg e-fas-times-circle w-[20px] mx-2" fill={p.iconColor} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path></svg>}  {f.feature}</p>

                            ))}
                            <div className='flex'>
                            <button href="" className=' w-[90%] mt-4 mx-auto font-bold py-2 rounded' style={{ background: p.buttonBackground, color: p.buttonColor }}>SIGN UP NOW</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Plans
