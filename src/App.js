import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a href="https://www.linkedin.com/in/masonee/" target="_blank">
            Emily Mason
          </a>{" "}
          and is{" "}
          <a href="https://github.com/masone85/final-react" target="_blank">
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="site" target="_blank">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
