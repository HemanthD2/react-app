import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world!</p>
        <a
          className="App-link"
          href="https://app.pluralsight.com/course-player?clipId=3cc293c5-250d-4505-b897-ef16c1c391ef"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hemanth Login page
        </a>
      </header>
    </div>
  );
}

export default App;
