import React, { useState } from 'react';

const Accordion = (props) => {
  // Initialize state to track the expanded state of the accordion
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the expansion state of the accordion
  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

 

  return (
    <div>
        <h2 id="accordion-collapse-heading-1  ">
        {/* text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 */}
          <button
            type="button"
            className={`flex  rounded items-center justify-between w-full p-3 font-medium rtl:text-right ${isExpanded? 'bg-white text-[#024963]' : 'bg-[#024963] text-white'} gap-3`}
            onClick={toggleAccordion} // Toggle expansion when button is clicked
            aria-expanded={isExpanded} // Pass the expanded state to aria-expanded attribute
            aria-controls="accordion-collapse-body-1" 
          >
            <span>{props.content.q}</span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 ${isExpanded ? 'rotate-0' : 'rotate-180'} shrink-0`} // Rotate the icon based on the expanded state
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-1" className={`p-3  border-b-0 bg-[#f7b141] text-black ${isExpanded ? '' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
          <p className="mb-2 ">{props.content.a}</p>
        </div>
    </div>
  );
};

export default Accordion;


