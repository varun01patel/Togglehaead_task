import React, { useState } from 'react';
import "../App.css"

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>FAQ</h2>
      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(0)}>
          <span>How does an investor gain access to MF Utility?</span>
          <i className={`fa ${open === 0 ? 'fa-minus-circle' : 'fa-plus-circle'}`}></i>
        </div>
        {open === 0 && <div className="faq-answer">Your answer here.</div>}
      </div>
      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(1)}>
          <span>Will investors be able to have multiple Common Account Numbers?</span>
          <i className={`fa ${open === 1 ? 'fa-minus-circle' : 'fa-plus-circle'}`}></i>
        </div>
        {open === 1 && <div className="faq-answer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </div>}
      </div>
      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(2)}>
          <span>How does an investor gain access to MF Utility?</span>
          <i className={`fa ${open === 2 ? 'fa-minus-circle' : 'fa-plus-circle'}`}></i>
        </div>
        {open === 2 && <div className="faq-answer">Your answer here.</div>}
      </div>
    </div>
  );
};

export default FAQ;
