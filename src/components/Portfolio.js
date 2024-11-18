import React from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGit } from 'react-icons/fa';

const Portfolio = () => {
  const technologies = [
    { icon: <FaReact />, name: "React", description: "I use React for building interactive UIs." },
    { icon: <FaJs />, name: "JavaScript", description: "I write dynamic scripts with JavaScript." },
    { icon: <FaHtml5 />, name: "HTML5", description: "HTML5 for semantic and accessible designs." },
    { icon: <FaCss3Alt />, name: "CSS3", description: "Styling with CSS3 for modern layouts." },
    { icon: <FaNodeJs />, name: "Node.js", description: "Node.js for backend API services." },
    { icon: <FaGit />, name: "Git", description: "Git for version control and collaboration." },
  ];

  return (
    <div className="section">
      <h2 className="section-title">Portfolio</h2>
      <div className="portfolio-grid">
        {technologies.map((tech, index) => (
          <div key={index} className="portfolio-item">
            <div className="portfolio-icon">{tech.icon}</div>
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
