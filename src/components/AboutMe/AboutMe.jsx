import "./AboutMe.css";

import React from "react";
import NavTabs from "../NavTabs/NavTabs";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TempNav from "../TempNav/TempNav";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Detail from "./Detail/Detail";
import { Stack } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

const AboutMe = () => {
  const aboutMeDetails = [
    "Looking for the next challenge in SW development",
    "Frontend: JavaScript, React.js || Backend: Node.js || DB: MongoDB, Sql",
    "B.Sc Industrial Management Information System engineer (Avg. 95, President's Honor List)",
    "SAP PP Manager: Characterization and Implementation efficiency solutions",
  ];
  return (
    <div className="AboutMe-page">
      <NavTabs className="AboutMe-Nav" tabName="aboutMe" />
      <div className="AboutMe-mainPage">
        <div className="AboutMe-headerContainer">
          <h1 className="AboutMe-title">Yehuda Krantz</h1>
          <div className="AboutMe-linkedinDiv">
            <a
              className="AboutMe-linkedinIcon"
              href="https://www.linkedin.com/in/yehuda-krantz/"
              target="_blank"
            >
              <Tooltip title={"my Linkdin"}>
                <LinkedInIcon fontSize="large" color="primary" />
              </Tooltip>
            </a>
          </div>
        </div>
        {/* <br></br> */}
        My CV:
        <div className="AboutMe-cvDiv">
          <a
            className="AboutMe-cvFile"
            // if want to show  directly in google
            // href="https://drive.google.com/file/d/1giY5P58xg94jsrnIFpy_ZC9mfUBgV0Xs/view?usp=sharing"
            href="https://drive.google.com/uc?export=download&id=1giY5P58xg94jsrnIFpy_ZC9mfUBgV0Xs"
          >
            <Tooltip title={"downlaod CV"}>
              <FileDownloadIcon
                className="AboutMe-cvFile"
                variant="contained"
                fontSize="large"
              />
            </Tooltip>
          </a>
        </div>
        <h2 className="AboutMe-aboutMeTitle">About Me: </h2>
        <ul className="AboutMe-ulDetails">
          {aboutMeDetails.map((detail) => (
            <Detail detail={detail} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
