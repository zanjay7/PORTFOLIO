import React from "react";
import "../style/Whatido.css";

const Whatido = () => {
  const services = [
    {
      id: "DEVELOP",
      desc: "Electronics graduate building the web. I turn coffee into Python & Django apps, crafting robust full-stack solutions.",
      skills: ["Python", "JavaScript", "React", "Django", "REST API", "Postman", "HTML", "CSS", "Bootstrap", "Tailwind", "MySQL"]
    },
    {
      id: "DESIGN",
      desc: "Creating digital experiences that are functional and striking. Bridging the gap between design and code.",
      skills: ["Figma", "UI/UX", "Canva"]
    }
  ];

  return (
    <section className="wid-section" id="work">
      <div className="wid-left">
        <div className="wid-heading-container">
          <h1 className="wid-main-title">
            WHAT <br /> 
            <span className="purple-text">I DO.</span>
          </h1>
        </div>
      </div>

      <div className="wid-right">
        {services.map((service, index) => (
          <div className="wid-service-box" key={index}>
            <div className="corner-accents">
              <div className="corner tl"></div>
              <div className="corner tr"></div>
              <div className="corner bl"></div>
              <div className="corner br"></div>
            </div>
            
            <h2 className="service-id">{service.id}</h2>
            <p className="service-label">Description</p>
            <p className="service-desc">{service.desc}</p>
            
            {/* Skills reveal on hover */}
            <div className="skillset-container">
              <p className="skill-label">Skillset & tools</p>
              <div className="skills-grid">
                {service.skills.map((skill, sIndex) => (
                  <span key={sIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Whatido;