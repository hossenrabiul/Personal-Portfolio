import React from "react";
import { Header } from "../../pages/Header/Header";
import About from "../../pages/About/About";
import './Mainlayout.css'
import Works from "../../pages/works/Works";
import Projects from "../../pages/Projects/Projects";
const Mainlayout = () => {
  return (
    <div>
      <div className="header-part">
        <Header />
        <About />
        <Works/>
        <Projects/>
      </div>
    </div>
  );
};

export default Mainlayout;
