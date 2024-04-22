import React, { useEffect } from "react";
import { slider } from "@/constants/index";
import Image from "next/image";

const Slider = () => {
    const cards = [
        {photo: 'images/1.webp'},
        {photo: 'images/2.webp'},
        {photo: 'images/3.webp'},
        {photo: 'images/4.webp'},
        {photo: 'images/5.webp'}

    ]
  useEffect(() => {
    const scrollers = document.querySelectorAll<HTMLDivElement>(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []); 

  function addAnimation(scrollers) {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every .scroller on the page
      scroller.setAttribute("data-animated", "true");

      // Make an array from the elements within .scroller-inner
      const scrollerInner =
        scroller.querySelector<HTMLDivElement>(".scroller__inner");
      if (scrollerInner) {
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the .scroller-inner
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      }
    });
  }

  return (
    <div>
      <div className="relative py-10 w-full flex flex-col gap-3">
        <div className="scroller" data-direction="right" data-speed="slow">
          <div className="scroller__inner">
            {cards.map((card) => (
              <Image
                key={index}
                src={card.photo}
                // alt={image.img}
                className="object-cover rounded-md"
                width={125}
                height={125}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

