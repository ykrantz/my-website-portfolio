import "./Project.css";

import React from "react";

const Project = ({ project: { title, projectName, image, url } }) => {
  console.log({ title, projectName, image, url });
  return (
    <div>
      <h2>{title}</h2>
      <h1>{projectName}</h1>
      <img className="Project-img" src={image} alt={projectName}></img>
      <br></br>
      <a href={url}>{projectName}</a>
    </div>
  );
};

export default Project;
