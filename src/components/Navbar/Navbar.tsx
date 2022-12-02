import React from "react";
import NavbarMenu from "./NavbarMenu";
import useWindowDimensions from "../../hooks/getWindowsDimensions";

const Navbar: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <div>
      <nav className="app_navbar">
        <div className="app_navbar_logo">
          <a href={`#header`}>
            <h1 className={`${width < 768 && "mt-[8px]"}`}>Shoham Douek</h1>
          </a>
        </div>
        {width > 768 && (
          <ul className="app_navbar_links">
            {["header", "about", "work", "skills", "contact"].map((item) => (
              <li className="app_flex p-text" key={`link-${item}`}>
                <div />
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
          </ul>
        )}
        {width < 768 && <NavbarMenu />}
      </nav>
    </div>
  );
};

export default Navbar;
