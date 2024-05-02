import React from 'react';

const Platforms = () => {
    const cards = [
        { photo: 'images/1.webp' },
        { photo: 'images/2.webp' },
        { photo: 'images/3.webp' },
        { photo: 'images/4.webp' },
        { photo: 'images/5.webp' }
    ];

    return (
        <>
            <h5 className='text-center text-3xl md:text-5xl font-bold mt-10'>Platforms We Use To Drive Client Success.</h5>
            <div className="slider h-200 mt-5 overflow-hidden">
                <div className="slide-track flex ">
                    {cards.map((card, index) => (
                        <div key={index} className="slide w-250 flex items-center px-15">
                            <img src={card.photo} alt={`Slide ${index + 1}`} className="w-1/2" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Platforms;
