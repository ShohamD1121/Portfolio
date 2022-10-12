import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: any;
}

const MotionWrapper: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      whileInView={{ y:  [50 , 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center"
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
