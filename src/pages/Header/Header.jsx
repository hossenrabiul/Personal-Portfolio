import React, { useState } from "react";
import "./Header.css";
import { RiExpandLeftRightLine } from "react-icons/ri";
import { CiMobile1 } from "react-icons/ci";
import { SlScreenDesktop } from "react-icons/sl";
import { GoArrowRight } from "react-icons/go";
import { TiArrowRight } from "react-icons/ti";
import { LuMenu } from "react-icons/lu";
import gsap from "gsap";
import { ImCross } from "react-icons/im";

export const Header = () => {
  const [on, setOn] = useState(false)
  const onSubmit = () => {
    // gsap.to(".absolute", {
    //   translateX: "200px",
    // });
    // setOn(false);
  };
  return (
    <div>
      <nav className="poppins-100">
        <div className="name">
          <h4 className="poppins-200">
            Rabiul Hosen
          </h4>
        </div>
        <div className="nav-links">
          <ul className="poppins-600">
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="button">
          <button className="poppins-600">Get Started</button>
        </div>
        <h6 className="menu-btn">
          <LuMenu className="menu" onClick={()=> setOn(true)} />
        </h6>
      </nav>
      <main>
        <h1 className="poppins-200">
          I Build Digital <br /> <span>Experience</span>
        </h1>
        <p className="poppins-200 primary-headline">
          Freelance developer specializing in{" "}
          <strong className="poppins-600">Web, Mobile</strong> and{" "}
          <strong className="poppins-600">Desktop Applications</strong>. I turn
          your ideas into powerful digital solutions that drive real business
          results.{" "}
        </p>
        <div className="icons">
          <div className="arrow-icon">
            <p>
              <RiExpandLeftRightLine className="img" />
            </p>
            <h4 className="poppins-700">Web Apps</h4>
          </div>
          <div className="mobile-icon">
            <p>
              <CiMobile1 className="img" />
            </p>
            <h4 className="poppins-700">Mobile Apps</h4>
          </div>
          <div className="destop-icon">
            <p>
              <SlScreenDesktop className="img" />
            </p>
            <h4 className="poppins-700">Desktop Apps</h4>
          </div>
        </div>
        <div className="buttons poppins-200">
          <button className="left-button poppins-100">
            Start Your Project <TiArrowRight className="right-img" />
          </button>
          <button className="right-button poppins-100">View My Work</button>
        </div>
        <p className="limited-time poppins-400">
          📅 <strong>Limited availability</strong> - Only taking 2 new projects
          this month
        </p>
      </main>

      <div className={`${on ? "absolute" : "not-absolute"}`}>
        <div className="poppins-100 absolute-nav">
          <div className="name">
            <h4 className="poppins-200" onClick={onSubmit}>
              Rabiul Hosen
            </h4>
          </div>
          <div className="absolute-nav-links">
            <ul className="poppins-600">
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Testimonials</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="absolute-nav-button">
            <button className="poppins-600">Get Started</button>
          </div>
        </div>
        <div>
          <ImCross className="cross" onClick={()=> setOn(false)}/>
        </div>
      </div>
    </div>
  );
};
