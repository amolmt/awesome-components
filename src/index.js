import React from "react";
import ReactDOM from "react-dom";
import ExploreButton from "./components/ExploreButton";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div style={{ height: "100%", display: "grid" }}>
        <ExploreButton />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
