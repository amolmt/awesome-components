import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import ExploreButton from "./components/ExploreButton";

const color = "#111";

const Wrapper = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  margin-top: 50%;
  font-family: Avenir, sans-serif;
  color: ${color};
`;

function App() {
  return (
    <div className="App">
      <Wrapper>
        <ExploreButton />
      </Wrapper>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
