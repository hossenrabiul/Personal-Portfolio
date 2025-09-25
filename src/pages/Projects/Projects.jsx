import React from "react";
import "./Projects.css";
import Headline from "../../components/Headline/Headline";
import Project from "../../components/Project/Project";
const Projects = () => {
  return (
    <div className="projects">
      <div>
        <Headline
          about={"Portfolio"}
          title={"Projects That Drive Real Results"}
          primary={
            "See how I've helped businesses across different industries achieve their goals through custom software solutions."
          }
        />
      </div>
      <div className="my-projects">
          <Project/>
      </div>
    </div>
  );
};

export default Projects;
