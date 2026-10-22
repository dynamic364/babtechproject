 import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="home_footer">
      <div className="footer">
        <div className="footer1">
          <img src="./ASSETS/tune-logo.png" alt="Food City Logo" width="150px" />
          <p>Restaurant beyond the ordinary</p>
          <div className="icon">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="./icons/fb-icon.svg" alt="Facebook Icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="./icons/ig-icon copy.svg" alt="Instagram Icon" />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
              <img src="./icons/what-icon.svg" alt="WhatsApp Icon" />
            </a>
          </div>
        </div>
        <div className="footer2">
          <h3>Contact</h3>
          <p>9, Babatunde Oki St., Town Planning Way, Ilupeju.</p>
          <p>+(234) 811 700 0803</p>
          <p><a href="mailto:info@tuneng.com">info@tuneng.com</a></p>
        </div>
        <div className="footer3">
          <h3>about us</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="footer4">
          <h3>profile</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="footer5">
          <h2>knowledge</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

   
