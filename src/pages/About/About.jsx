import React from "react";
import "./About.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsTrophy } from "react-icons/bs";
import Headline from "../../components/Headline/Headline";
import { FaClock, FaGlobe, FaProjectDiagram, FaUserTie } from "react-icons/fa";
const About = () => {
  return (
    <div id="about">
      <div>
        <Headline
          about={"About Me"}
          title={"Building Digital Solutions That"}
          primary={
            "I'm Rabiul Hosen, a Softwae Engineer driven by a passion for turning ideas into clean, inituitive digital experiences"
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
                Skilled across frontend, backend, databases, and cloud
                deployment — delivering complete, production-ready solutions.
              </p>
            </div>
          </div>
          <div className="about-skills skills">
            <div className="mark-icon">
              <IoMdCheckmarkCircleOutline className="mark" />
            </div>
            <div>
              <h4 className="why-me-title poppins-400">
                Business-Driven Engineering
              </h4>
              <p className="why-me-sub-title poppins-400">
                I translate business goals into scalable software that drives
                growth, user engagement, and measurable results.
              </p>
            </div>
          </div>
          <div className="about-skills skills">
            <div className="mark-icon">
              <IoMdCheckmarkCircleOutline className="mark" />
            </div>
            <div>
              <h4 className="why-me-title poppins-400">
                Fast & Reliable Delivery
              </h4>
              <p className="why-me-sub-title poppins-400">
                Agile workflows, clean code practices, and CI/CD pipelines
                ensure rapid releases without sacrificing quality.
              </p>
            </div>
          </div>
          <div className="about-skills skills">
            <div className="mark-icon">
              <IoMdCheckmarkCircleOutline className="mark" />
            </div>
            <div>
              <h4 className="why-me-title poppins-400">Long-Term Support</h4>
              <p className="why-me-sub-title poppins-400">
                Beyond launch, I provide continuous optimization, security
                updates, and new features to keep your product competitive.
              </p>
            </div>
          </div>
        </div>
        <div className="why-me-right-site">
          <div className="elem">
            <div className="elem-img">
              <FaProjectDiagram /> {/* Projects */}
            </div>
            <h6 className="poppins-400">50+ Projects Delivered</h6>
            <p className="poppins-400">Proven track record of success</p>
          </div>
          <div className="elem">
            <div className="elem-img">
              <FaUserTie /> {/* Experience */}
            </div>
            <h6 className="poppins-400">5+ Years of Experience</h6>
            <p className="poppins-400">Trusted by startups & enterprises</p>
          </div>
          <div className="elem">
            <div className="elem-img">
              <FaGlobe /> {/* Global Reach */}
            </div>
            <h6 className="poppins-400">Global Reach</h6>
            <p className="poppins-400">Clients in 15+ countries</p>
          </div>
          <div className="elem">
            <div className="elem-img">
              <FaClock /> {/* On-Time */}
            </div>
            <h6 className="poppins-400">100% On-Time Delivery</h6>
            <p className="poppins-400">Never missed a deadline</p>
          </div>
        </div>
      </div>
      <div className="technologies">
        <h3 className="poppins-400">Core Technologies</h3>
        <div className="all-stack">
          {/* Frontend */}
          <h6 className="poppins-600">React.js</h6>
          <h6 className="poppins-600">Next.js</h6>
          <h6 className="poppins-600">TypeScript</h6>

          {/* Backend */}
          <h6 className="poppins-600">Node.js</h6>
          <h6 className="poppins-600">Express.js</h6>
          <h6 className="poppins-600">REST APIs</h6>
          <h6 className="poppins-600">GraphQL</h6>

          {/* Databases */}
          <h6 className="poppins-600">MongoDB</h6>
          <h6 className="poppins-600">PostgreSQL</h6>
          <h6 className="poppins-600">MySQL</h6>

          {/* DevOps & Cloud */}
          <h6 className="poppins-600">AWS</h6>
          <h6 className="poppins-600">Docker</h6>
        </div>
      </div>
    </div>
  );
};

export default About;
