import React from 'react';
import Lottie from 'react-lottie';
import animationData from "../assets/subscribe.json" // Adjust the path if necessary
import "../App.css"

const Subscribe = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="subscribe-container">
      <div className="subscribe-text">
        <h3>Subscribe</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
        <div className="subscribe-input">
          <input type="email" placeholder="Enter your Email Address" />
          <button>Subscribe Now <i className="fa fa-arrow-right"></i></button>
        </div>
      </div>
      <div className="subscribe-animation">
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>
    </div>
  );
};

export default Subscribe;
