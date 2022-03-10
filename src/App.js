import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            {/* <Route exact path="/" element={<LogIn />} /> */}
            {/* <Route exact path="/" element={<p>dd</p>} /> */}
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/aboutme" element={<AboutMe />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
