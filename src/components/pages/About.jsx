import React from "react";
import "../style/About.css";
import tornPaper from "../assets/img2.png"; 

const About = () => {
  return (
    <section 
      className="about-section" 
      id="about" 
      style={{ backgroundImage: `url(${tornPaper})` }}
    >
      <div className="about-content-wrapper">
        
        {/* The Animated Equation Track */}
        <div className="equation-container">
          
          <div className="shape-wrapper float-up">
            <div className="shape heart">
              <span className="text-serif">Beautiful</span>
              <span className="text-bold">UI</span>
            </div>
          </div>

          <div className="symbol bounce">+</div>

          <div className="shape-wrapper float-side delay-1">
            <div className="shape slant">
              <span className="text-serif">Efficient</span>
              <span className="text-bold">UX</span>
            </div>
          </div>

          <div className="symbol bounce">+</div>

          <div className="shape-wrapper float-up delay-2">
            <div className="shape arch">
              <span className="text-serif">Delightful</span>
              <span className="text-bold">INTERACTIONS</span>
            </div>
          </div>

          <div className="symbol bounce delay-1">=</div>

          <div className="shape-wrapper float-side">
            <div className="shape circle">
              <span className="text-serif">a Timeless</span>
              <span className="text-bold">PRODUCT</span>
            </div>
          </div>
        </div>

        {/* Footer Banner */}
        <div className="yup-banner">
          <span className="star-spin">★</span>
          <h2>YUP, I DO 'EM ALL!</h2>
          <span className="star-spin">★</span>
        </div>

      </div>
    </section>
  );
};

export default About;