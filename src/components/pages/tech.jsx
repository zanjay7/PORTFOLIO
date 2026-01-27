import React from "react";
import { motion } from "framer-motion";
import { 
  SiPython, SiDjango, SiJavascript, SiReact, 
  SiTailwindcss, SiPostman, SiMysql, SiHtml5, 
  SiCss3, SiBootstrap, SiArduino, SiFigma 
} from "react-icons/si";
import "../style/Tech.css";

const Tech = () => {
  const stacks = [
    { name: "Python", icon: <SiPython />, color: "#3776AB" },
    { name: "Django", icon: <SiDjango />, color: "#092E20" },
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    { name: "Arduino", icon: <SiArduino />, color: "#00979D" },
    { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
    { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
  ];

  return (
    <section className="tech-section">
      <div className="tech-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="tech-title"
        >
          TECH<span className="gradient-text">STACK.</span>
        </motion.h2>

        <div className="tech-grid">
          {stacks.map((tech, index) => (
            <motion.div 
              className="tech-card"
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 } 
              }}
              viewport={{ once: true }}
            >
              <div className="tech-icon" style={{ color: tech.color }}>
                {tech.icon}
              </div>
              <span className="tech-name">{tech.name}</span>
              
              {/* Subtle background glow on hover */}
              <div className="card-glow" style={{ background: tech.color }}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;