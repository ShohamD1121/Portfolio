import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header";
import ComponentWrapper from "./components/ComponentWrapper";
import About from "./components/About";
import Works from "./components/Works/Works";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact";
import ProjectCards from "./components/ProjectCards/ProjectCards";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <ComponentWrapper idName="header" bgColor="#b3e8e5">
        <Header />
      </ComponentWrapper>
      <ComponentWrapper idName="about" bgColor="#ffffff">
        <About />
      </ComponentWrapper>
      <ComponentWrapper idName="work" bgColor="#b3e8e5">
        <Works />
      </ComponentWrapper>
      <ComponentWrapper idName="skills" bgColor="#ffffff">
        <Skills />
      </ComponentWrapper>
      <ComponentWrapper idName="contact" bgColor="#ffffff">
        <Contact />
      </ComponentWrapper>
      <ComponentWrapper idName="cards" bgColor="#b3e8e5">
        <ProjectCards />
      </ComponentWrapper>
    </div>
  );
};

export default App;
