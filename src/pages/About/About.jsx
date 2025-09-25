import React from "react";
import "./About.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsTrophy } from "react-icons/bs";
import Headline from "../../components/Headline/Headline";
const About = () => {
  return (
    <div id="about">
      <div>
        <Headline
          about={"About Me"}
          title={"Building Digital Solutions That"}
          primary={
            "I'm Sujyot Raut, a passionate freelance developer with a proven track record of delivering high-quality applications that drive business growth"
          }
        />
      </div>
      <div className="why-me-part">
        <div className="why-me-left-site">
          <h3 className="why-me poppins-300">Why Choise Me? </h3>
          <div className="about-skills skills">
            <div className="mark-icon">
              <IoMdCheckmarkCircleOutline className="mark" />
            </div>
            <div>
              <h4 className="why-me-title poppins-400">Full-Stack Expreties</h4>
              <p className="why-me-sub-title poppins-400">
                From frontend to backend, databases to deployment - I handle it
                all.
              </p>
            </div>
          </div>
          <div className="about-skills skills">
            <div className="mark-icon">
              <IoMdCheckmarkCircleOutline className="mark" />
            </div>
            <div>
              <h4 className="why-me-title poppins-400">
                Business-First Approach
              </h4>
              <p className="why-me-sub-title poppins-400">
                I don't just code - I solve business problems and drive growth.
              </p>
            </div>
          </div>
          <div className="about-skills skills">
            <div className="mark-icon">
              <IoMdCheckmarkCircleOutline className="mark" />
            </div>
            <div>
              <h4 className="why-me-title poppins-400">
                Lightning Fast Delivery
              </h4>
              <p className="why-me-sub-title poppins-400">
                Agile development process ensures rapid iteration and quick
                time-to-market.
              </p>
            </div>
          </div>
          <div className="about-skills skills">
            <div className="mark-icon">
              <IoMdCheckmarkCircleOutline className="mark" />
            </div>
            <div>
              <h4 className="why-me-title poppins-400">Ongoing Support</h4>
              <p className="why-me-sub-title poppins-400">
                Post-launch maintenance and feature updates to keep your app
                competitive.
              </p>
            </div>
          </div>
        </div>
        <div className="why-me-right-site">
          <div className="elem">
            <div className="elem-img">
              <BsTrophy />
            </div>
            <h6 className="poppins-400">50+ Project Delivered</h6>
            <p className="poppins-400">100% Success Rate</p>
          </div>
          <div className="elem">
            <div className="elem-img">
              <BsTrophy />
            </div>
            <h6 className="poppins-400">5+ Years Experience</h6>
            <p className="poppins-400">Trusted by Startups & Enterprises</p>
          </div>
          <div className="elem">
            <div className="elem-img">
              <BsTrophy />
            </div>
            <h6 className="poppins-400">Global Clients</h6>
            <p className="poppins-400">15+ Countries Served</p>
          </div>
          <div className="elem">
            <div className="elem-img">
              <BsTrophy />
            </div>
            <h6 className="poppins-400">Always On Time</h6>
            <p className="poppins-400">Never Missed a Deadline</p>
          </div>
        </div>
      </div>
      <div className="technologies">
        <h3 className="poppins-400">Technologies I Master</h3>
        <div className="all-stack">
          <h6 className="poppins-600">React & Next.js</h6>
          <h6 className="poppins-600">Node.js</h6>
          <h6 className="poppins-600">Express.js</h6>
          <h6 className="poppins-600">MongoDB</h6>
          <h6 className="poppins-600"> SQL</h6>
          <h6 className="poppins-600">AWS</h6>
          <h6 className="poppins-600">Docker</h6>
        </div>
      </div>
    </div>
  );
};

export default About;
