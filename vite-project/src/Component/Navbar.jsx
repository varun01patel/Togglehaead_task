import React, { useState } from 'react';
import '../App.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">LOGO</div>
      <div className={`navbar-menu ${menuActive ? 'active' : ''}`}>
        <div className="navbar-item">Qualifications</div>
        <div className="navbar-item">Organizations</div>
        <div className="navbar-item">Research & Analysis</div>
        <div className="navbar-item">Lorem ipsum</div>
        <div className="navbar-item">Lorem ipsum</div>
        <div className="navbar-search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="navbar-enrolment">Enrolment</div>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
