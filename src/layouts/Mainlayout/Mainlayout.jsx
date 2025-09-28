import React from "react";
import { Header } from "../../pages/Header/Header";
import About from "../../pages/About/About";
import './Mainlayout.css'
import Works from "../../pages/works/Works";
import Projects from "../../pages/Projects/Projects";
import Testimonials from "../../pages/Testimonials/Testimonials";
import { Contact } from "../../pages/Contact/Contact";
const Mainlayout = () => {
  return (
    <div>
      <div className="header-part">
        <Header />
        <About />
        <Works/>
        <Projects/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
};

export default Mainlayout;
