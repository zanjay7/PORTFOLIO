import React from "react";
import img5 from "../assets/img5.png"; 
import img1 from "../assets/img1.png"; 
import "../style/Mywork.css";
import skill from "../assets/skill.png";
import crime from "../assets/crime.png";
import fragranzia from "../assets/fragranzia.png";

const Mywork = () => {
  const baseBackgroundStyle = {
    backgroundImage: `url(${img5})`,
    backgroundSize: "150% 100%", 
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
    // opacity: "0.8"
  };

  const topOverlayStyle = {
    backgroundImage: `url(${img1})`,
    backgroundSize: "100% 100%", 
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1, 
    opacity: "0",
    pointerEvents: "none"
  };

  const projects = [
    { 
      title: "Skill Connect", 
      num: "01", 
      tech: "Javascript,Python,Django,React,Rest APIs", 
      category: "Web design and development",
      img: skill 
    },
    { 
      title: "Crime Line", 
      num: "02", 
      tech: "python,Django,Html,Css,Bootstrap", 
      category: "Web Project",
      img: crime
    },
    { 
      title: "Fragranzia", 
      num: "03", 
      tech: "JavascriptReact,Tailwind", 
      category: "E-commerce Project",
      img: fragranzia
    }
  ];

  return (
    <section className="work-outer-container">
      <div style={baseBackgroundStyle}></div>
      <div style={topOverlayStyle}></div>

      <div className="content-wrapper">
        <div className="work-header-area">
          <h1 className="work-bg-text-small">MY <span className="purple_text">WORKS.</span></h1>
        </div>
        
        {/* Horizontal Card Track */}
        <div className="projects-card-track">
          {projects.map((project, index) => (
            <div className="work-card-mini" key={index}>
              <div className="card-image-wrapper">
                <img src={project.img} alt={project.title} className="card-thumb" />
              </div>
              
              <div className="card-info">
                <div className="card-header">
                  <span className="card-num">{project.num}</span>
                  <div className="card-title-group">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-cat">{project.category}</p>
                  </div>
                </div>

                <div className="card-footer">
                  <span className="footer-label">Tools and features</span>
                  <p className="footer-tech">{project.tech}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mywork;