import React, { useEffect, useRef, useState } from "react";
import "../style/Mycarrer.css";

const Mycarrer = () => {
  const sectionRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress while section is in viewport
      const start = windowHeight;
      const end = -rect.height;

      const progress = ((start - rect.top) / (start - end)) * 100;

      setScrollPercent(Math.max(0, Math.min(100, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences = [
    {
      role: "Intern",
      company: "Bharat Sanchar Nigam Limited (BSNL)",
      date: "2023",
      duration: "May 2023 - Jun 2023",
      desc: "Gained hands-on experience in telecommunications and network management."
    },
    {
      role: "Intern",
      company: "Prominent",
      date: "2023",
      duration: "Jul 2023 - Aug 2023",
      desc: "Assisted in the design, development, testing, and quality control of electrical components."
    },
    {
      role: "Python Full Stack Developer Intern",
      company: "Softronics",
      date: "NOW",
      duration: "Oct 2024 - Present",
      desc: "Developed and managed full-stack web applications using Python, Django, HTML, CSS, Bootstrap, and SQL."
    }
  ];

  return (
    <section className="career-section" ref={sectionRef} id="experience">
      <div className="career-header">
        <h1 className="career-title">
          MY CAREER <br /> &
          <span>EXPERIENCE.</span>
        </h1>
      </div>

      <div
        className="career-timeline"
        style={{ "--line-height": `${scrollPercent}%` }}
      >
        {/* CENTRAL LINE */}
        <div className="timeline-line">
          <div className="line-grow"></div>
          <div className="line-glow-tip"></div>
        </div>

        {experiences.map((exp, index) => (
          <div className="experience-row" key={index}>
            <div className="exp-left">
              <h3 className="exp-role">{exp.role}</h3>
              <p className="exp-company">{exp.company}</p>
            </div>

            <div className="exp-center">
              <span className="exp-date">{exp.date}</span>
            </div>

            <div className="exp-right">
              <p className="exp-desc">{exp.desc}</p>
              <span className="exp-duration">{exp.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mycarrer;
