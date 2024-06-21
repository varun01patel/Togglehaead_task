import React from 'react';
import '../App.css';

const Examination = () => {
  return (
    <div className="examination-section">
      <div className="examination-content">
        <div className="examination-header">
          <h2>Upcoming Examinations</h2>
          <p>Enquire about the examination & register for the exams</p>
        </div>
        <div className="examination-cards">
          <div className="examination-card">
            <div className="icon"><i className="fa fa-calendar"></i></div>
            <div className="details">
              <h3>02th October 2014</h3>
              <p>Level 1 exam</p>
            </div>
          </div>
          <div className="examination-card">
            <div className="icon"><i className="fa fa-calendar"></i></div>
            <div className="details">
              <h3>Nov-Dec 2016</h3>
              <p>Level 2<br />Lorem Ipsum<br />Lorem Ipsum</p>
            </div>
          </div>
          <div className="examination-card">
            <div className="icon"><i className="fa fa-calendar"></i></div>
            <div className="details">
              <h3>Ongoing this year</h3>
              <p>Level 3 (Grad)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examination;
