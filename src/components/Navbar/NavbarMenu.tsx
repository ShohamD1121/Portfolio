import React, { useState } from "react";

const NavbarMenu: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const menuOnClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div>
      <div id="menu">
        <div
          id="menu-bar"
          className={`${toggle ? "change" : ""}`}
          onClick={menuOnClick}
        >
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
        </div>
        <nav className={`nav ${toggle ? "change" : ""}`} id="nav">
          <ul>
            {["header", "about", "work", "skills", "contact"].map((item) => (
              <li className="uppercase" key={`link-${item}`}>
                <div />
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div
        className={`menu-bg ${toggle ? "change-bg" : ""}`}
        id="menu-bg"
      ></div>
    </div>
  );
};

export default NavbarMenu;
