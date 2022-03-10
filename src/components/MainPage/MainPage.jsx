import "./MainPage.css";
import Projects from "./Projects/Projects";
import playListLogo from "../../images/welcome_page_known_user_b.PNG";
import globalShopLogo from "../../images/shops-g0fd51ba89_640.jpg";
import panchTimeLogo from "../../images/clock-gb966335cb_640.jpg";
import ticTacToeLogo from "../../images/clover-g7a6e366f4_640Tic.jpg";
import groceryShopLogo from "../../images/grocery-gf851f3910_640.jpg";

const MainPage = () => {
  const myProjects = [
    {
      title: "React + Node.js + MongoDB",
      projectName: "Video Play List",
      image: playListLogo,
      url: "https://playlist-ykrantz.netlify.app/",
    },
    {
      title: "React ",
      projectName: "Shop",
      image: globalShopLogo,
      url: "",
    },
    {
      title: "React + Node.js + MongoDB",
      projectName: "Panck Time Watch",
      image: panchTimeLogo,
      url: "",
    },
    {
      title: "HTML (vanila)",
      projectName: "Tic Tac Toe",
      image: ticTacToeLogo,
      url: "https://tic-tac-toe-ykrantz.netlify.app/",
    },
    {
      title: "HTML (vanila)",
      projectName: "Grocery Store",
      image: groceryShopLogo,
      url: "",
    },
  ];
  return (
    <div>
      <h1>main page</h1>
      <div className="MainPage-projectsContainer">
        <Projects myProjects={myProjects} />
      </div>
    </div>
  );
};

export default MainPage;
