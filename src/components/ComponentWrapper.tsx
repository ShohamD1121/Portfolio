import React from "react";
import useWindowDimensions from "../hooks/getWindowsDimensions";
import NavigationDots from "../components/NavigationDots";
import SocialMedia from "../components/SocialMedia";

interface Props {
  children: JSX.Element;
  idName: string;
  bgColor: string;
}

export const container = {
  show: {
    transition: { staggerChildren: 0.3, delayChildren: 2 },
  },
};

const ComponentWrapper: React.FC<Props> = ({ children, idName, bgColor }) => {
  const { width } = useWindowDimensions();

  return (
    <div
      id={idName}
      className="component_container"
      style={{ backgroundColor: bgColor }}
    >
      {width > 768 && <SocialMedia />}
      <div className="component_container_wrapper">{children}</div>
      {width > 768 && <NavigationDots active={idName} />}
    </div>
  );
};

export default ComponentWrapper;
