import React from "react";
import ReactSvg from "../images/react.svg";
import Server from "../images/server.svg";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const abouts = [
    {
      title: "Front End Development",
      description:
        "Devloping Interactive User Interfaces With ReactJS FrameWork.",
      imgUrl: ReactSvg,
    },
    {
      title: "Back End Development",
      description:
        "Developing Server Side Using NodeJS ExpressJS, With SQL/NOSQL DataBases such as MongoDB and MySQL",
      imgUrl: Server,
    },
  ];

  return (
    <div className="about">
      <h2>
        I Make <span>Incredable Websites</span>
        <br /> with Passion <span> and Proficiency</span>
      </h2>
      <div className="about_items">
        {abouts.map((about, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="about_items_item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h3 style={{ marginTop: 20 }}>{about.title}</h3>
            <p style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
