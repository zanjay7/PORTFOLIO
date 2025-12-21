import React from 'react';
import '../style/Contact.css';
import { 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaBehance, 
  FaMediumM, 
  FaDribbble,
  FaGithub
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="minimal-page">
      <div className="content-wrapper">
        
        {/* Pills Container - Now stacked in a column */}
        <div className="pills-container">
          
          

          {/* Bottom Pill */}
          <a 
            href="https://linkedin.com/in/zanjay" 
            target="_blank" 
            
            className="glass-pill"
          >
            <div className="icon-group">
              <div className="icon instagram"><FaInstagram /></div>
              <div className="icon github"><FaGithub /></div>
              <div className="icon linkedin"><FaLinkedinIn /></div>

            </div>
            <div className="text-group">
              <span className="handle">@1zanjay</span>
              <span className="subtext">LinkedIn, Instagram,GitHub</span>
            </div>
          </a>
        </div>

        <div className="divider"></div>

        {/* Full white signature above the shadow */}
        <p className="signature">
          made with love, inspiration and a bit of caffeine.
        </p>
        
        <span className="footer-note">© 2025 SANJAY KRISHNAN</span>
      </div>
    </div>
  );
};

export default Contact;