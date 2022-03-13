import "./AboutMe.css";

import React from "react";
import NavTabs from "../NavTabs/NavTabs";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TempNav from "../TempNav/TempNav";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const AboutMe = () => {
  return (
    <div className="AboutMe-page">
      <NavTabs className="AboutMe-Nav" />
      <div className="AboutMe-headerContainer">
        <h1 className="AboutMe-title">Yehuda Krantz</h1>
      </div>
      <a
        className="AboutMe-linkedin"
        href="https://www.linkedin.com/in/yehuda-krantz/"
        target="_blank"
      >
        <LinkedInIcon fontSize="large" color="primary" />
      </a>
      <br></br>
      My CV:
      <a
        className="AboutMe-linkedin"
        // href="https://drive.google.com/file/d/1giY5P58xg94jsrnIFpy_ZC9mfUBgV0Xs/view?usp=sharing"
        href="https://drive.google.com/uc?export=download&id=1giY5P58xg94jsrnIFpy_ZC9mfUBgV0Xs"
        // target="_blank"
      >
        <FileDownloadIcon
          className="AboutMe-cvFile"
          variant="contained"
          fontSize="large"
        />
      </a>
    </div>
  );
};

export default AboutMe;
