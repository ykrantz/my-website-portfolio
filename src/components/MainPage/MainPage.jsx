import "./MainPage.css";
import Projects from "./Projects/Projects";

import NavTabs from "../NavTabs/NavTabs";
import myProjects from "../../utils/myProjects";

const MainPage = () => {
  return (
    <div className="MainPage-page">
      <div className="MainPage-nav">
        <NavTabs tabName="mainPage" />
      </div>
      <h1 className="MainPage-title">My Projects</h1>
      <div className="MainPage-projectsContainer">
        <Projects myProjects={myProjects} />
      </div>
    </div>
  );
};

export default MainPage;
