import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedia: React.FC = () => {
  return (
    <div className="app_social">
      <div>
        <a href="https://www.linkedin.com/in/shoham-d-6250bb13a/">
          <FaLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/ShohamD1121">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
