import React, { Component } from "react";

class Button extends Component {
  state = {
    check: "on"
  };
  handler = (e) => {
    this.setState({ check: "off" });
  };
  handlerUp = (e) => {
    this.setState({ check: "on" });
  };
  componentDidMount() {
    window.addEventListener("keydown", this.handler);
    window.addEventListener("keyup", this.handlerUp);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handler);
    window.removeEventListener("keyup", this.handlerUp);
  }
  render() {
    let className1 = " release_message ";
    let className2 = " press_message ";
    const { check } = this.state;
    if (check === "on") {
      className1 += " display_none ";
    } else if (check === "off") {
      className2 = " display_none ";
    }
    return (
      <div className="button_wrapper">
        <p className={className1}>⤹ release the space bar to roll the dice </p>
        <button type="button"> </button>
        <p className={className2}>press the space bar to shake the dice ⤴</p>
      </div>
    );
  }
}

export default Button;
