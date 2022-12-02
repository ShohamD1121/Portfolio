import React from "react";
import TechCircles from "./TechCircles/TechCircles";
import { motion } from "framer-motion";
import { container, item } from "../animations/animations";

const Header: React.FC = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="header"
    >
      <motion.div className="header_information">
        <div className="header_information_info">
          <motion.h1 variants={item} className="header_title">
            Hey! Im <span>Shoham</span>
          </motion.h1>
          <motion.h3 variants={item} className="header_text">
            A Full-Stack <span>Web Developer</span>
          </motion.h3>
          <motion.p variants={item} className="header_desc">
            I'm a Self taught Full Stack Developer familiar with wide range of
            programming concepts and languages. a team player with excellent
            communication abilities, hard worker, Problem Solver, self-learner
            and adapt quickly to new environments.
          </motion.p>
        </div>
        <motion.div
          variants={item}
          className="flex justify-center items-center w-full"
        >
          <TechCircles />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
