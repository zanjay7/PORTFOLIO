import React from "react";
import Spline from "@splinetool/react-spline";
import "../style/Landing.css";
import bgImage from "../assets/img1.png";
// 1. At the top with your other imports
import { FaFilePdf } from "react-icons/fa";
import resumeFile from "../assets/Resume.pdf"; // Make sure the file is in your assets folder

// ... inside your Landing return function, after the social-icons div:

// Components
import About from "./About";
import Mywork from "./Mywork";
import Contact from "./Contact";
import Whatido from "./Whatido";
import Mycarrer from "./Mycarrer";
import Tech from "./tech";
import Songs from "./Songs";
import { FaDiscord, FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";

function Landing() {
  return (
    <div
      className="landing-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* HEADER */}
      <header className="landing-header">
        <div className="nav-inner">
          <div className="logo">
            <a href="#">sanjay.py</a>
          </div>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero-section">

        {/* TEXT BEHIND 3D */}
        <div className="hero-bg-text">
          <h1>
            IN LIFE THERE’S ONLY 1 RULE <br />
            KEEP MOVING.
          </h1>
        </div>

        {/* 3D SPLINE */}
        <div className="hero-3d-full-screen">
          <Spline scene="https://prod.spline.design/JH2CmZopIAJ2Cu1q/scene.splinecode" />
        </div>
        

      {/* RESUME DOWNLOAD (BOTTOM RIGHT) */}
      <div className="resume-container">
        <a 
          href={resumeFile} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="resume-link"
          download="Sanjay_Resume.pdf" // This forces a download
        >
          <span className="resume-text">RESUME</span>
          <div className="resume-icon-circle">
            <FaFilePdf />
          </div>
        </a>
      </div>

        
      </section>

      {/* SECTIONS */}
      <section id="about" className="section-transparent">
        <About />
      </section>

      <section id="whatido" className="section-transparent">
        <Whatido />
      </section>

      <section id="mycarrer" className="section-transparent">
        <Mycarrer />
      </section>

      <section id="work" className="section-transparent">
        <Mywork />
      </section>

      <section id="techstack" className="section-transparent">
        <Tech />
      </section>

      <section id="songs" className="section-transparent">
        <Songs />
      </section>

      <section id="contact" className="section-transparent">
        <Contact />
      </section>

      {/* SOCIAL ICONS */}
      <div className="social-icons">
        <a href="#" aria-label="Discord">
          <FaDiscord />
        </a>
        <a href="https://www.instagram.com/1zanjay?igsh=MTNoaHpyYTBsaTljdA==" target="_blank" 
    rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://github.com/zanjay7" target="_blank" 
    rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="#" aria-label="Facebook">
          <FaFacebook />
        </a>
      </div>
    </div>
  );
}

export default Landing;
