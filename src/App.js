import logo from "./logo.svg";
import "./App.css";

function App() {
  const giphy_secret_key = process.env.REACT_APP_GIPHY_API_KEY;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{giphy_secret_key}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Kuy
        </a>
        <p>{process.env.REACT_APP_USERNAME}</p>
      </header>
    </div>
  );
}

export default App;
