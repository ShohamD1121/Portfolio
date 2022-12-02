import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { works } from "../Works/WorksData";
import { motion } from "framer-motion";

const Card: React.FC = () => {
  return (
    <SwiperSlide>
      <div className="work_items_item">
        <div className="work_items_item_img">
          <img src={works[0].imgUrl} alt={works[0].name} />
          <motion.div
            whileHover={{ opacity: [0, 1] }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              staggerChildren: 0.5,
            }}
            className="work_items_item_hover"
          >
            <a href={works[0].projectLink} target="_blank" rel="noreferrer">
              <motion.div
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.9] }}
                transition={{ duration: 0.25 }}
                className="flex justify-center items-center"
              >
                <AiFillEye />
              </motion.div>
            </a>
            <a href={works[0].codeLink} target="_blank" rel="noreferrer">
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
          <h4>{works[0].title}</h4>
          <p>{works[0].description}</p>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default Card;
