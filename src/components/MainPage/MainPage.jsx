import "./MainPage.css";
import Projects from "./Projects/Projects";
import playListLogo from "../../images/welcome_page_known_user_b.PNG";
import onlineShopLogo from "../../images/online-shop.PNG";
import panchTimeLogo from "../../images/clock-gb966335cb_640.jpg";
import ticTacToeLogo from "../../images/tic-tac-toe.PNG";
import groceryShopLogo from "../../images/grocery-gf851f3910_640.jpg";
import chuckNorris from "../../images/chuckNorris.PNG";

const MainPage = () => {
  const myProjects = [
    {
      id: 10,
      frameWork: "React + Node.js + MongoDB",
      projectName: "Video Play List",
      image: playListLogo,
      url: "https://playlist-ykrantz.netlify.app/",
      avatar: "VP",
      active: true,
    },

    {
      id: 20,
      frameWork: "React + Node.js + MongoDB",
      projectName: "Panck Time Watch",
      image: panchTimeLogo,
      url: "",
      avatar: "PT",
      active: false,
    },
    {
      id: 12,
      frameWork: "React + API ",
      projectName: "Online Shop",
      image: onlineShopLogo,
      url: "https://online-shop-ykrantz.netlify.app/",
      avatar: "OS",
      active: true,
    },
    {
      id: 14,
      frameWork: "HTML (vanila)+ JS",
      projectName: "Tic Tac Toe",
      image: ticTacToeLogo,
      url: "https://tic-tac-toe-ykrantz.netlify.app/",
      avatar: "TT",
      active: true,
    },
    {
      id: 50,
      frameWork: "HTML (vanila) + JS",
      projectName: "Grocery Store",
      image: groceryShopLogo,
      url: "",
      avatar: "GS",
      active: false,
    },
    {
      id: 60,
      frameWork: "React",
      projectName: "TO DO LIST",
      image: groceryShopLogo,
      url: "",
      avatar: "TD",
      active: false,
    },
    {
      id: 70,
      frameWork: "React + Redux",
      projectName: "TO DO LIST- REDUX",
      image: groceryShopLogo,
      url: "",
      avatar: "TD",
      active: false,
    },
    {
      id: 16,
      frameWork: "HTML (vanila) + JS + API",
      projectName: "Chuck Noris Jokes",
      image: chuckNorris,
      url: "https://chuck-norris-ykrantz.netlify.app/",
      avatar: "CN",
      active: true,
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
