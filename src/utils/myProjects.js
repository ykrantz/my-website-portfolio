import playListLogoResponsive from "../images/playlist-responsive-d.png";
import playListLogo from "../images/welcome_page_known_user_c.png";
import onlineShopLogo from "../images/online-shop-b.png";
import panchTimeLogo from "../images/panckTimeClock.png";
import ticTacToeLogo from "../images/tic-tac-toe-responsive-d.png";
import groceryShopLogo from "../images/grocery-gf851f3910_640.jpg";
import chuckNorris from "../images/chuckNorris.PNG";
import memoryGame from "../images/memoryGame.PNG";
import weatherApp from "../images/weatherAppScreen.png";
import movieDataBaseLogo from "../images/movie_data_base.png";

const myProjects = [
  {
    id: 10,
    frameWork: "React.js + Node.js + MongoDB",
    projectName: "Video Play List",
    image: playListLogoResponsive,
    url: "https://playlist-ykrantz.netlify.app/",
    gitHubUrlClient: "https://github.com/ykrantz/song-list-full-client",
    gitHubUrlServer: "https://github.com/ykrantz/song-list-full-server",
    avatar: "VP",
    active: true,
    details: `JWT authorizaiotn || Password bcrypt || MUI || Responsive ||
      AJAX || Express.js
      React hooks ||
      DB
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
    id: 11,
    frameWork: "React + Node.js + MongoDB",
    projectName: "Video Play List",
    image: playListLogo,
    url: "https://ykrantz-playlist-notresp.netlify.app",
    gitHubUrlClient: "https://github.com/ykrantz/song-list-full-client",
    gitHubUrlServer: "https://github.com/ykrantz/song-list-full-server",
    avatar: "VP",
    active: false,
    details: `JWT athorizaiotn || Password bcrypt || MUI ||
      AJAX || Express.js
      React hooks ||
      DB
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
    frameWork: "HTML (vanilla) + CSS + JS",
    projectName: "Tic Tac Toe",
    image: ticTacToeLogo,
    url: "https://tic-tac-toe-ykrantz.netlify.app/",
    gitHubUrlClient: "https://github.com/ykrantz/Tic_Tac_Toe",
    gitHubUrlServer: "",
    avatar: "TT",
    active: true,
    details: "HTML || CSS || HTML Query Selectors || Responsive || JavaScript",
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
    frameWork: "React + TypeScript + API ",
    projectName: "Movie DataBase",
    image: movieDataBaseLogo,
    url: "https://movielist-ykrantz.netlify.app",
    gitHubUrlClient: "https://github.com/ykrantz/movie-list-client",
    gitHubUrlServer: "",
    avatar: "MD",
    active: true,
    details: "React hooks || MUI || TS || AJAX ",
    features: ["- Search movie from dataBase", "- DarkMode"],
  },
  {
    id: 14,
    frameWork: "React.js + API ",
    projectName: "Online Shop",
    image: onlineShopLogo,
    url: "https://online-shop-ykrantz.netlify.app/",
    gitHubUrlClient: "https://github.com/ykrantz/online-shop",
    gitHubUrlServer: "",
    avatar: "OS",
    active: true,
    details: "React hooks || MUI || AJAX ",
    features: [
      "- Filter products and sort according to your preferance",
      "- Add products to cart and get total price",
    ],
  },
  {
    id: 15,
    frameWork: "HTML (vanilla) + JS + API",
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
    id: 19,
    frameWork: "React.js + Node.js + MongoDB",
    projectName: "Weater App",
    image: weatherApp,
    url: "https://weatherapp-ykrantz.netlify.app/",
    gitHubUrlClient: "https://github.com/ykrantz/weather-app-client",
    gitHubUrlServer: "https://github.com/ykrantz/weather-app-server",
    avatar: "WA",
    active: true,
    details: `BootStrap || React hooks || Responsive ||
      AJAX || Express.js ||
      DB 
      `,

    features: [
      "- Search cities and get update weather",
      "- Save favorite cities or remove from favorites",
    ],
  },
  {
    id: 20,
    frameWork: "React.js + Node.js + MongoDB",
    projectName: "Panck Time clock",
    image: panchTimeLogo,
    url: "https://panch-time-clock-ykrantz.netlify.app/",
    gitHubUrlClient: "https://github.com/ykrantz/panch_time_clock-client",
    gitHubUrlServer: "https://github.com/ykrantz/server-panch-time-clock",
    avatar: "PT",
    active: true,
    details: `React || AJAX || Express.js ||
      DB `,
    features: [
      "- Report enterance and exit time of worker by worker id",
      "- Create new workers ID",
      "- CalcUlate total hours of the last shift",
      "- Get details of all shift that a worker did",
    ],
  },
  {
    id: 22,
    frameWork: "HTML (vanilla) + JS + API",
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
    frameWork: "HTML (vanilla) + CSS + JS",
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
    frameWork: "React.js",
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
    frameWork: "React.js + Redux",
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

export default myProjects;
