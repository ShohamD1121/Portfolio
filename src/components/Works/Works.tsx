import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { works } from "./WorksData";
import { motion } from "framer-motion";

const Works: React.FC = () => {
  return (
    <div className="work">
      <h2 className="work_title">
        My <span>Projects</span>
      </h2>

      <motion.div
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="work_items"
      >
        {works.map((work, index) => (
          <div className="work_items_item" key={index}>
            <div className="work_items_item_img">
              <img src={work.imgUrl} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="work_items_item_hover"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="flex justify-center items-center"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="flex justify-center items-center"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="work_items_item_content">
              <h4>{work.title}</h4>
              <p>{work.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Works;
