import React from 'react';
import { Link, useLocation } from "react-router-dom";
import Button from "../tempalates/button";
import "./navbar.css";

const Navbar = () => {
  const location = useLocation();

  const getHeaderText = (pathname) => {
    switch (pathname) {
      case '/':
        return 'Welcome';
      case '/services':
        return 'SERVICES';
      case '/pricing':
        return 'OUR PRICES';
      case '/contact':
        return 'CONTACT US';
      case '/support':
        return 'SUPPORT';
      case '/about':
        return 'ABOUT US';
      default:
        return 'PAGE NOT FOUND';
    }
  };

  const headerText = getHeaderText(location.pathname);

  const classLi = ""

  return (
    <div className="header">
      <h1>{headerText}</h1>
      <div className="head">
        <div className="logo">
          <h1>TUNE</h1>
        </div>
        <nav>
          <ul>
            <li> <Link to="/" className='font-bold text-red-500 '>HOME</Link></li>
            <li><Link to="/services">SERVICES</Link></li>
            <li><Link to="/pricing">PRICING</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
            <li><Link to="/support">SUPPORT</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
          </ul>
        </nav>
        <div className="header-btn">
          <Button buttonText= 'Request for a demo' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
