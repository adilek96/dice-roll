import React, { Component } from "react";
import "./styles.css";
import RightDice from "./RightDise/RightDise.jsx";
import LeftDice from "/src/LeftDise/LeftDice.jsx";
import Button from "./Button/Button.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <LeftDice />
          <RightDice />
        </div>
        <Button />
      </div>
    );
  }
}

export default App;
