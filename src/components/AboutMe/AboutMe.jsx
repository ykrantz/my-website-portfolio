import "./AboutMe.css";

import React from "react";
import NavTabs from "../NavTabs/NavTabs";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Detail from "./Detail/Detail";
import Tooltip from "@mui/material/Tooltip";
import GitHubButton from "../GitHubButton/GitHubButton";
import { Box, Grid } from "@mui/material";

const AboutMe = () => {
  const CV_LINK =
    "https://drive.google.com/uc?export=download&id=1r1QoJlSoe6ej83cTiXRvXkgHYGOLX835";

  const aboutMeDetails = [
    "Looking for the next challenge in SW development",
    "Frontend: JavaScript, React.js || Backend: Node.js || DB: MongoDB, Sql",
    "B.Sc Industrial Management Information System engineer (Avg. 95, President's Honor List)",
    "SAP PP Manager: Characterization and Implementation efficiency solutions",
  ];
  return (
    <div className="AboutMe-page">
      <div className="AboutMe-Nav-div">
        <NavTabs className="AboutMe-Nav" tabName="aboutMe" />
      </div>
      <div className="AboutMe-mainPage">
        <div className="AboutMe-headerContainer">
          <h1 className="AboutMe-title">Yehuda Krantz</h1>

          <div className="AboutMe-linkesDiv">
            {/* <Box display="flex" alignItems="center" justifyContent="center"> */}

            <div className="AboutMe-linkedinLink">
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

            <div className="AboutMe-gitHubLink">
              <GitHubButton
                gitHubUrl="https://github.com/ykrantz"
                urlType="link"
              />
            </div>
          </div>
        </div>
        {/* <br></br> */}
        <div className="AboutMe-myCvTitle">
          My CV:
          <div className="AboutMe-cvDiv">
            <a
              className="AboutMe-cvFile"
              // if want to show  directly in google
              // href="https://drive.google.com/file/d/1giY5P58xg94jsrnIFpy_ZC9mfUBgV0Xs/view?usp=sharing"
              href={CV_LINK}
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
        </div>
        <h4 className="AboutMe-aboutMeTitle">About Me: </h4>
        <ul className="AboutMe-ulDetails">
          {aboutMeDetails.map((detail) => (
            <Detail key={detail} detail={detail} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
