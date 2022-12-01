import React from "react";
import TechCircle from "./TechCircle";
import profilePic from "../../images/my_pic.jpg";
import { techImages } from "../../techImages";
import { motion } from "framer-motion";

let N = 8,
  pi = Math.PI,
  angle = 0;

const TechCircles: React.FC = () => {
  return (
    <motion.div className="relative container flex justify-center items-center w-[300px] h-[300px] md:h-[400px] md:w-[400px] 2xl:h-[600px] 2xl:w-[600px]">
      <img
        src={profilePic}
        alt="img"
        className="2xl:h-[150px] 2xl:w-[150px] md:h-[100px] md:w-[100px] h-[75px] w-[75px] rounded-[50%] text-center"
      />

      {techImages.map((img, index) => {
        angle += (2 * pi) / N;

        return <TechCircle key={index} img={img} angle={angle} />;
      })}
    </motion.div>
  );
};

export default TechCircles;
