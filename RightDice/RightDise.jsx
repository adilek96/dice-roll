import React, { Component } from "react";

class RightDice extends Component {
  state = {
    randomNum: [],
    active: "no"
  };
  handler = (e) => {
    if (e.code === "Space") {
      let num = Math.floor(Math.random() * 6 + 1);
      this.setState({ randomNum: num });
      this.setState({ active: "active" });
    }
  };
  handlerUp = (e) => {
    if (e.code === "Space") {
      this.setState({ active: "no" });
    }
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
    let className1 = " dice_dot-wrapper_1 ";
    let className2 = " dice_dot-wrapper_2 ";
    let className3 = " dice_dot-wrapper_3 ";
    let className4 = " dice_dot-wrapper_4 ";
    let className5 = " dice_dot-wrapper_5 ";
    let className6 = " dice_dot-wrapper_6 ";
    let classForAnimation = " dice_wrapper  right_dice-color ";
    const { randomNum, active } = this.state;
    if (active === "active") {
      classForAnimation += " animation animation_for-right ";
    }

    switch (randomNum) {
      case 1:
        className1 += "display_block";
        break;
      case 2:
        className2 += "display_block";
        break;
      case 3:
        className3 += "display_block";
        break;
      case 4:
        className4 += "display_block";
        break;
      case 5:
        className5 += "display_block";
        break;
      case 6:
        className6 += "display_block";
        break;
      default:
        className1 += "display_block";
    }
    return (
      <div className="dice_container">
        <div className={classForAnimation}>
          <div className={className1}>
            <div className="dice_dot side1_dot1"></div>
          </div>

          <div className={className2}>
            <div className="dice_dot side2_dot1"></div>
            <div className="dice_dot side2_dot2"></div>
          </div>

          <div className={className3}>
            <div className="dice_dot side3_dot1"></div>
            <div className="dice_dot side3_dot2"></div>
            <div className="dice_dot side3_dot3"></div>
          </div>

          <div className={className4}>
            <div className="dice_dot side4_dot1"></div>
            <div className="dice_dot side4_dot2"></div>
            <div className="dice_dot side4_dot3"></div>
            <div className="dice_dot side4_dot4"></div>
          </div>

          <div className={className5}>
            <div className="dice_dot side5_dot1"></div>
            <div className="dice_dot side5_dot2"></div>
            <div className="dice_dot side5_dot3"></div>
            <div className="dice_dot side5_dot4"></div>
            <div className="dice_dot side5_dot5"></div>
          </div>

          <div className={className6}>
            <div className="dice_dot side6_dot1"></div>
            <div className="dice_dot side6_dot2"></div>
            <div className="dice_dot side6_dot3"></div>
            <div className="dice_dot side6_dot4"></div>
            <div className="dice_dot side6_dot5"></div>
            <div className="dice_dot side6_dot6"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default RightDice;
