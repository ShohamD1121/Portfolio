import React from "react";
import { motion } from "framer-motion";
import useWindowDimensions from "../hooks/getWindowsDimensions";
import NavigationDots from "../components/NavigationDots";
import SocialMedia from "../components/SocialMedia";

interface Props {
  children: any;
  idName: string;
  bgColor: string;
}

const ComponentWrapper: React.FC<Props> = ({ children, idName, bgColor }) => {
  const { width } = useWindowDimensions();

  return (
    <div id={idName} className="component_container" style={{backgroundColor : bgColor}}>
      {width > 768 && <SocialMedia />}
      <motion.div
        whileInView={{ y: [-100, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 1 }}
        className="component_container_wrapper"
      >
        {children}
      </motion.div>
      {width > 768 && <NavigationDots active={idName} />}
    </div>
  );
};

export default ComponentWrapper;
