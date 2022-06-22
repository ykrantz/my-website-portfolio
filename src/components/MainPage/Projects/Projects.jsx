import "./Projects.css";

import React from "react";
import Project from "../Project/Project";

const Projects = ({ myProjects }) => {
  console.log(myProjects);
  // sort acording to id
  myProjects.sort((a, b) => a.id - b.id);
  return (
    <div className="Projects-mainContainer">
      <div className="Projects-projectContainer">
        {myProjects.map((project) => (
          <Project key={project.projectName} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
