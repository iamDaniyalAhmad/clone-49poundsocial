import React, { useState } from 'react';

const Accordion = (props) => {
  // Initialize state to track the expanded state of each accordion item
  const [expandedItems, setExpandedItems] = useState([]);

  // Function to toggle the expansion state of a specific item
  const toggleAccordion = (index) => {
    setExpandedItems((prevItems) =>
      prevItems.includes(index) ? prevItems.filter((item) => item !== index) : [...prevItems, index]
    );
  };

  // Function to check if an item is currently expanded
  const isItemExpanded = (index) => {
    return expandedItems.includes(index);
  };

  // Function to generate dynamic styles based on item's expanded state
  const getAccordionStyles = (index) => {
    return {
      backgroundColor: isItemExpanded(index) ? 'white' : '#024963',
      color: isItemExpanded(index) ? '#024963' : 'white',
      border: 'none',
    };
  };

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item" style={{ border: 'none' }}>
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            onClick={() => toggleAccordion(props.content.index)}
            style={getAccordionStyles(props.content.index)}
          >
            {props.content.q}
          </button>
        </h2>
        <div
          className={`accordion-collapse collapse ${isItemExpanded(props.content.index) ? 'show' : ''}`}
          id={props.content.index}
          aria-expanded={isItemExpanded(props.content.index) ? 'true' : 'false'}
        >
          <div className="accordion-body">
            {props.content.a}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
