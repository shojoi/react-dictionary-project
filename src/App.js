import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header>Dictionary</header>
      <Dictionary />
      <footer>
        This project was coded by Shobha Joshi and is open-sourced on
        <a
          href="https://github.com/shojoi/react-weather-app-with-forecast"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://vocal-crostata-6e4375.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
