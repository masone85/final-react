import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was created by Emily Mason and is open-sourced on GitHub{" "}
          <a href="https://github.com/masone85/final-react" target="_blank">
            here!
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
