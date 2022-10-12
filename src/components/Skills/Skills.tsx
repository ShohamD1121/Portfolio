import React from "react";
import { skillsData } from "./SkillsData";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  return (
    <div className="skills">
      <h2 className="skills_title">Skills</h2>
      <div className="skills_container">
        <motion.div className="skills_list">
          {skillsData.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skills_list_item"
              key={skill.name}
            >
              <div
                className="flex justify-center items-center"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
