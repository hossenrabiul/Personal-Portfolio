import React from "react";
import { Header } from "../../pages/Header/Header";
import About from "../../pages/About/About";
import "./Mainlayout.css";
import Works from "../../pages/Works/Works";
import Projects from "../../pages/Projects/Projects";
import Testimonials from "../../pages/Testimonials/Testimonials";
import { Contact } from "../../pages/Contact/Contact";
const Mainlayout = () => {
  return (
    <div>
      <div className="header-part">
        <section id="header">
          <Header />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Works />
        </section>
        <section id="portfolio">
          <Projects />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Mainlayout;
