import "./MainPage.css";
import Projects from "./Projects/Projects";
import playListLogo from "../../images/welcome_page_known_user_c.png";
import onlineShopLogo from "../../images/online-shop-b.png";
import panchTimeLogo from "../../images/panckTimeClock.png";
import ticTacToeLogo from "../../images/tic-tac-toe.PNG";
import groceryShopLogo from "../../images/grocery-gf851f3910_640.jpg";
import chuckNorris from "../../images/chuckNorris.PNG";
import memoryGame from "../../images/memoryGame.PNG";

import NavTabs from "../NavTabs/NavTabs";

const MainPage = () => {
  const myProjects = [
    {
      id: 10,
      frameWork: "React + Node.js + MongoDB",
      projectName: "Video Play List",
      image: playListLogo,
      url: "https://playlist-ykrantz.netlify.app/",
      gitHubUrlClient: "https://github.com/ykrantz/song-list-full-client",
      gitHubUrlServer: "https://github.com/ykrantz/song-list-full-server",
      avatar: "VP",
      active: true,
      details: `JWT athorizaiotn || Password bcrypt ||
      AJAX ||
      React hooks ||
      DB updated each transaction 
      `,

      features: [
        "- Register and log in in with your personal account",
        "- Website will remember you in your next enternce with your athorizaiotn tocken",
        "- Password encrypted by bcrypt library and DB saves only the encypted password ",
        "- Create new playlists and Save songs in playlists",
        "- Search for videos in YouTube with out advertizments",
        "- Play the video on your demand",
        "- Find which other user also liked the song",
        "- Search video in your playlist",
      ],
    },

    {
      id: 12,
      frameWork: "HTML (vanila) + CSS + JS",
      projectName: "Tic Tac Toe",
      image: ticTacToeLogo,
      url: "https://tic-tac-toe-ykrantz.netlify.app/",
      gitHubUrlClient: "https://github.com/ykrantz/Tic_Tac_Toe",
      gitHubUrlServer: "",
      avatar: "TT",
      active: true,
      details: "HTML || CSS || HTML Query Selectors || JavaScript",
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
      id: 13,
      frameWork: "React + API ",
      projectName: "Online Shop",
      image: onlineShopLogo,
      url: "https://online-shop-ykrantz.netlify.app/",
      gitHubUrlClient: "https://github.com/ykrantz/online-shop",
      gitHubUrlServer: "",
      avatar: "OS",
      active: true,
      details: "React || AJAX || React hooks ",
      features: [
        "- Filter products and sort according to your preferance",
        "- Add products to cart and get total price",
      ],
    },
    {
      id: 15,
      frameWork: "HTML (vanila) + JS + API",
      projectName: "Memory Game",

      image: memoryGame,
      url: "https://memory-game-ykrantz.netlify.app/",
      gitHubUrlClient: "https://github.com/ykrantz/memory-game",
      gitHubUrlServer: "",
      avatar: "MG",
      active: true,
      details: "HTML || CSS || HTML Query Selectors || JavaScript",
      features: ["- Guess cards that match"],
    },
    {
      id: 20,
      frameWork: "React + Node.js + MongoDB",
      projectName: "Panck Time clock",
      image: panchTimeLogo,
      url: "https://panch-time-clock-ykrantz.netlify.app/",
      gitHubUrlClient: "https://github.com/ykrantz/panch_time_clock-client",
      gitHubUrlServer: "https://github.com/ykrantz/server-panch-time-clock",
      avatar: "PT",
      active: true,
      details: `React || AJAX ||
      DB updated each transaction`,
      features: [
        "- Report enterance and exit time of worker by worker id",
        "- Create new workers ID",
        "- CalcUlate total hours of the last shift",
        "- Get details of all shift that a worker did",
      ],
    },
    {
      id: 22,
      frameWork: "HTML (vanila) + JS + API",
      projectName: "Chuck Noris Jokes",
      image: chuckNorris,
      url: "https://chuck-norris-ykrantz.netlify.app/",
      gitHubUrlClient: "https://github.com/ykrantz/AJAX--Chack-Noris",
      gitHubUrlServer: "",
      avatar: "CN",
      active: true,
      details: " AJAX || HTML || CSS || HTML Query Selectors || JavaScript",
      features: [
        "Choose category and get 3 random Chuck Norris jokes",
        "Search jokes in category (no need to press the search button)",
        "Get random joke",
      ],
    },
    {
      id: 50,
      frameWork: "HTML (vanila) + CSS + JS",
      projectName: "Grocery Store",
      image: groceryShopLogo,
      url: "",
      gitHubUrlClient: "",
      gitHubUrlServer: "",
      avatar: "GS",
      active: false,
      details: " HTML || JavaScript || HTML Query Selectors || CSS ",
      features: [],
    },
    {
      id: 60,
      frameWork: "React",
      projectName: "TO DO LIST",
      image: groceryShopLogo,
      url: "https://to-do-list-ykrantz.netlify.app/",
      gitHubUrlClient: "https://github.com/ykrantz/to_do_list",
      gitHubUrlServer: "",
      avatar: "TD",
      active: false,
      details: "React || React hooks || HTML",
      features: [],
    },
    {
      id: 70,
      frameWork: "React + Redux",
      projectName: "TO DO LIST- REDUX",
      image: groceryShopLogo,
      url: "https://to-do-list-redux-ykrantz.netlify.app/",
      gitHubUrlClient: "https://github.com/ykrantz/todo-redux-basic",
      gitHubUrlServer: "",
      avatar: "TD",
      active: false,
      details: "React || Redux || React hooks || HTML",
      features: [],
    },
  ];
  return (
    <div className="MainPage-page">
      <NavTabs tabName="mainPage" />

      <h1 className="MainPage-title">My Projects</h1>
      <div className="MainPage-projectsContainer">
        <Projects myProjects={myProjects} />
      </div>
    </div>
  );
};

export default MainPage;
