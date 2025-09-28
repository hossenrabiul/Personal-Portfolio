import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import "./Project.css";
const Project = ({img}) => {
  return (
    <div className="main">
      <div className="project">
        <div className="left-part">
          <img
            src={img}
            alt=""
          />
        </div>
        <div className="right-part">
          <h5 className="poppins-300">Web Application</h5>
          <h3 className="title poppins-500">
            EcoTrack - Sustainability Platform
          </h3>
          <p className="subtitle poppins-500">
            A comprehensive platform helping businesses track and reduce their
            carbon footprint with real-time analytics and reporting.
          </p>
          <div className="all-stacks">
            <h6 className="stack poppins-400">React</h6>
            <h6 className="stack poppins-400">Node.js</h6>
            <h6 className="stack poppins-400">PostgreSQL</h6>
            <h6 className="stack poppins-400">Chart.js</h6>
          </div>
          <div className="my-effcts">
            <div className="effect">
              <FaUserFriends className="icon poppins-100" />
              <h6 className="poppins-300">10k+</h6>
              <span className="poppins-200">Download</span>
            </div>
            <div className="effect">
              <FaUserFriends className="icon" />
              <h6 className="poppins-300">10k+</h6>
              <span className="poppins-200">Retention Rete</span>
            </div>
            <div className="effect">
              <FaUserFriends className="icon" />
              <h6 className="poppins-300">10k+</h6>
              <span className="poppins-200">Monthly Revenue</span>
            </div>
          </div>
          <div className="buttons">
            <button>
              <BsBoxArrowUpRight /> Live Demo
            </button>
            <button>
              <VscGithubAlt /> Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
