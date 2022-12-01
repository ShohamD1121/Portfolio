import React from "react";
import { motion } from "framer-motion";
// import myImg from "../images/my_pic.jpg";
import TechCircles from "./TechCircles/TechCircles";

const Header: React.FC = () => {
  return (
    <div className="header">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="header_information"
      >
        <div className="header_information_info">
          <h1 className="header_title">
            Hey! Im <span>Shoham</span>
          </h1>
          <h3 className="header_text">
            A Full-Stack <span>Web Developer</span>
          </h3>
          <p className="header_desc">
            I'm a Self taught Full Stack Developer familiar with wide range of
            programming concepts and languages. a team player with excellent
            communication abilities, hard worker, Problem Solver, self-learner
            and adapt quickly to new environments.
          </p>
        </div>
        <div className="flex justify-center items-center w-full">
          <TechCircles />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
