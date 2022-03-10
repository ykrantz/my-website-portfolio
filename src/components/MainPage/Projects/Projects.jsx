import "./Projects.css";

import React from "react";
import Project from "../Project/Project";

const Projects = ({ myProjects }) => {
  console.log(myProjects);
  return (
    <div>
      <h1>Projects</h1>
      <div className="Projects-projectContainer">
        {myProjects.map((project) => (
          <Project key={project.projectName} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
