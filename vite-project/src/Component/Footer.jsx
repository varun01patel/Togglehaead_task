import React from 'react';
import "../App.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section contact">
        <h3>Contact us</h3>
        <p>Address: amet, consetetur sadipscing elitr, sed diam</p>
        <p>Email id: eirmod tempor invidunt ut labore et dolore</p>
        <p>Phone no: 123456789</p>
      </div>
      <div className="footer-section follow">
        <h3>Follow us</h3>
        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-quora"></i>
        </div>
      </div>
      <div className="footer-section office">
        <h3>Head Office</h3>
        <p><i className="fas fa-map-marker-alt"></i> Lorem ipsum dolor sit amet, consetetur </p>
        <p><i className="fas fa-clock"></i> Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
        <p><i className="fas fa-clock"></i> Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
        <p><i className="fas fa-bus"></i> Lorem ipsum asd asdsaweeq Lorem Ipsum</p>
      </div>
      <div className="footer-bottom">
        <p>© 2021 All Rights Reserved. <a href="/privacy-policy">Privacy Policy</a></p>
      </div>
    </div>
  );
};

export default Footer;
