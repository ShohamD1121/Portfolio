import React from "react";
import { motion } from "framer-motion";
import useWindowDimensions from "../../hooks/getWindowsDimensions";

type Props = {
  img: string;
  angle: number;
};

const TechCircle: React.FC<Props> = ({ img, angle }) => {
  const { width } = useWindowDimensions();

  let backR = width > 1536 ? 300 : width > 768 ? 200 : 150,
    frontR = width > 1536 ? 45 : width > 768 ? 30 : 22.5,
    radius = width > 1536 ? 210 : width > 768 ? 140 : 105;

  return (
    <motion.div
      className="absolute flex justify-center items-center w-xl h-xl rounded-[50%] bg-white hover:shadow"
      style={{
        left: backR - frontR + radius * Math.cos(angle) + "px",
        top: backR - frontR + radius * Math.sin(angle) + "px",
        width: frontR * 2 + "px",
        height: frontR * 2 + "px",
      }}
      whileHover={{ scale: 1.2, rotate: -90 }}
      whileTap={{
        scale: 0.8,
        rotate: -90,
        borderRadius: "100%",
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <img
        src={img}
        alt="img"
        className="w-3/4 h-3/4 rounded-[50%] text-center"
      />
    </motion.div>
  );
};

export default TechCircle;
