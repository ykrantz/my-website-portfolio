import "./MainPage.css";
import Projects from "./Projects/Projects";
import playListLogo from "../../images/welcome_page_known_user_b.PNG";
import onlineShopLogo from "../../images/online-shop.PNG";
import panchTimeLogo from "../../images/clock-gb966335cb_640.jpg";
import ticTacToeLogo from "../../images/tic-tac-toe.PNG";
import groceryShopLogo from "../../images/grocery-gf851f3910_640.jpg";
import chuckNorris from "../../images/chuckNorris.PNG";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import NavTabs from "../NavTabs/NavTabs";
import TempNav from "../TempNav/TempNav";

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
      details: `JWT athorizaiotn ||
      Data from server ||
      DB updated each tranzaction ||
      YouTube API
      `,

      features: [
        "- Register and log in in with your personal account",
        "- Website will remember you in your next enternce with your athorizaiotn tocken",
        "- Create new playlists and Save songs in playlists",
        "- Search for videos in YouTube with out advertizments",
        "- Play the video on your demand",
        "- Find which other user also liked the song",
        "- Search video in your playlist",
      ],
    },

    {
      id: 20,
      frameWork: "React + Node.js + MongoDB",
      projectName: "Panck Time Watch",
      image: panchTimeLogo,
      url: "",
      avatar: "PT",
      active: false,
      details: "",
      features: [],
    },
    {
      id: 12,
      frameWork: "React + API ",
      projectName: "Online Shop",
      image: onlineShopLogo,
      url: "https://online-shop-ykrantz.netlify.app/",
      avatar: "OS",
      active: true,
      details: "React || Data from API ",
      features: [
        "- Add products to cart and get total price",
        "- Filter products and sort according to your preferance",
      ],
    },
    {
      id: 14,
      frameWork: "HTML (vanila)+ JS",
      projectName: "Tic Tac Toe",
      image: ticTacToeLogo,
      url: "https://tic-tac-toe-ykrantz.netlify.app/",
      avatar: "TT",
      active: true,
      details: "Vanila HTML || JavaScript logic",
      features: [
        "Play with your friend Tic Tac Toe until winning",
        "Decide how match row/columns you wnt in game between 3-10 row/columns",
        "Go back moves if you regret, and continue playing from where you want to continue",
        "Show the highest score (the minimun torns to win) and reset the highest score",
        "Save game in your loacl storage and load the game",
        "Reset Game after finish the game",
        "Chabnge playes name if you wnat",
      ],
    },
    {
      id: 50,
      frameWork: "HTML (vanila) + JS",
      projectName: "Grocery Store",
      image: groceryShopLogo,
      url: "",
      avatar: "GS",
      active: false,
      details: "Vanila HTML || JavaScript logic",
      features: [],
    },
    {
      id: 60,
      frameWork: "React",
      projectName: "TO DO LIST",
      image: groceryShopLogo,
      url: "",
      avatar: "TD",
      active: false,
      details: "",
      features: [],
    },
    {
      id: 70,
      frameWork: "React + Redux",
      projectName: "TO DO LIST- REDUX",
      image: groceryShopLogo,
      url: "",
      avatar: "TD",
      active: false,
      details: "",
      features: [],
    },
    {
      id: 16,
      frameWork: "HTML (vanila) + JS + API",
      projectName: "Chuck Noris Jokes",
      image: chuckNorris,
      url: "https://chuck-norris-ykrantz.netlify.app/",
      avatar: "CN",
      active: true,
      details: "HTML (vanila)+ JS + API",
      features: [
        "Choose category and get 3 random Chuck Norris jokes",
        "Search jokes in category (no need to press the search button)",
        "Get random joke",
      ],
    },
  ];
  return (
    <div className="MainPage-page">
      {/* <LinkedInIcon fontSize="large" color="primary" /> */}
      <NavTabs />

      {/* 
      <a
        className="MainPage-linkedin"
        href="https://www.linkedin.com/in/yehuda-krantz/"
        target="_blank"
      >
        <LinkedInIcon fontSize="large" color="primary" />
      </a> */}

      <h1 className="MainPage-title">My Projects</h1>
      <div className="MainPage-projectsContainer">
        <Projects myProjects={myProjects} />
      </div>
    </div>
  );
};

export default MainPage;
