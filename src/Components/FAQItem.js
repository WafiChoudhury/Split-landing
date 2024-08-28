import React, { useState } from 'react';


const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="faq-item">
        <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
          {question}
          <span>{isOpen ? '-' : '+'}</span>
        </button>
        {isOpen && <p className="faq-answer">{answer}</p>}
      </div>
    );
  };

export default FAQItem;