import "./MainPage.css";
import Projects from "./Projects/Projects";
import playListLogo from "../../images/welcome_page_known_user_b.PNG";
import onlineShopLogo from "../../images/online-shop.PNG";
import panchTimeLogo from "../../images/clock-gb966335cb_640.jpg";
import ticTacToeLogo from "../../images/tic-tac-toe.PNG";
import groceryShopLogo from "../../images/grocery-gf851f3910_640.jpg";

const MainPage = () => {
  const myProjects = [
    {
      frameWork: "React + Node.js + MongoDB",
      projectName: "Video Play List",
      image: playListLogo,
      url: "https://playlist-ykrantz.netlify.app/",
      avatar: "VP",
    },

    {
      frameWork: "React + Node.js + MongoDB",
      projectName: "Panck Time Watch",
      image: panchTimeLogo,
      url: "",
      avatar: "PT",
    },
    {
      frameWork: "React ",
      projectName: "Online Shop",
      image: onlineShopLogo,
      url: "https://online-shop-ykrantz.netlify.app/",
      avatar: "OS",
    },
    {
      frameWork: "HTML (vanila)",
      projectName: "Tic Tac Toe",
      image: ticTacToeLogo,
      url: "https://tic-tac-toe-ykrantz.netlify.app/",
      avatar: "TT",
    },
    {
      frameWork: "HTML (vanila)",
      projectName: "Grocery Store",
      image: groceryShopLogo,
      url: "",
      avatar: "GS",
    },
  ];
  return (
    <div>
      <h1 className="MainPage-title">My Portfolio</h1>
      <div className="MainPage-projectsContainer">
        <Projects myProjects={myProjects} />
      </div>
    </div>
  );
};

export default MainPage;
