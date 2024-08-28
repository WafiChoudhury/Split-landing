import React, { useState } from 'react';


const ReadMoreButton = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="faq-item">
        <button className="read-more-btn" onClick={() => setIsOpen(!isOpen)}>
          {question}
          <span>{isOpen ? '-' : 'Read More'}</span>
        </button>
        {isOpen && <p className="faq-answer">{answer}</p>}
      </div>
    );
  };

export default ReadMoreButton;