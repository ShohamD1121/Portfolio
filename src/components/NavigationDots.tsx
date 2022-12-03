import React from "react";

interface Props {
  active: string;
}

const NavigationDots: React.FC<Props> = ({ active }) => {
  return (
    <div className="app_navigation">
      {["header", "about", "work", "skills", "contact"].map((item, index) => (
        <a
          key={item + index}
          href={`#${item}`}
          className="app_navigation_dot"
          style={active === item ? { backgroundColor: "#2F8F9D" } : {}}
        >
          {" "}
        </a>
      ))}
    </div>
  );
};

export default NavigationDots;
