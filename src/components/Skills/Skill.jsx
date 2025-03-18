import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiJquery, SiBootstrap, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import "./Skill.css";
import theme from "../../assets/theme.svg"

const skills = [
  { name: "HTML", icon: <FaHtml5 className="icon html" style={{ color: "#E34F26" }} /> },
  { name: "CSS", icon: <FaCss3Alt className="icon css" style={{ color: "#1572B6" }} /> },
  { name: "JavaScript", icon: <FaJs className="icon js" style={{ color: "#F7DF1E" }} /> },
  { name: "jQuery", icon: <SiJquery className="icon jquery" style={{ color: "#0769AD" }} /> },
  { name: "Bootstrap", icon: <SiBootstrap className="icon bootstrap" style={{ color: "#7952B3" }} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="icon tailwind" style={{ color: "#06B6D4" }} /> },
  { name: "Git/GitHub", icon: <FaGitAlt className="icon git" style={{ color: "#F05032" }} /> },
  { name: "React.js", icon: <FaReact className="icon react" style={{ color: "#61DAFB" }} /> },
  { name: "Node.js", icon: <FaNodeJs className="icon node" style={{ color: "#339933" }} /> },
  { name: "Express.js", icon: <SiExpress className="icon express" style={{ color: "#000000" }} /> },
  { name: "MongoDB", icon: <SiMongodb className="icon mongo" style={{ color: "#47A248" }} /> }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
    <div className="skill-title">
      <h2 className="title">Technical Skills</h2>
      <img src={theme} alt="" />
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon}
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
