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
        <Project
          img={
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
          }
        />
        <Project
          img={
            "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
          }
        />
        <Project
          img={
            "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop"
          }
        />
      </div>
      <div className="lets-discuss">
        <p className="discuss poppins-400">
          Ready to see similar results for your business ? 
        </p>
        <h5 className="shedule-button poppins-300">
          Let's Discuss Your Project
        </h5>
      </div>
    </div>
  );
};

export default Projects;
