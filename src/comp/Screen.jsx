import React from "react";
import "./Screen.css";

// Images
import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissors.png";
import win from "../assets/youwin.png";
import lose from "../assets/youlose.png";
import draw from "../assets/draw.png";

const Screen = (props) => {
  const renderImages = () => {
    if (props.img === "rock") {
      return rock;
    }
    if (props.img === "paper") {
      return paper;
    }
    if (props.img === "scissors") {
      return scissors;
    }
    if (props.img === "win") {
      return win;
    }
    if (props.img === "lose") {
      return lose;
    }
    if (props.img === "draw") {
      return draw;
    }
  };
  return (
    <div>
      <div className="screen">
        <div className="screen_body">
          <h4 className="screen_title">{props.title}</h4>

          <img
            src={renderImages()}
            className="screen_img "
            alt="RPS game"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Screen;
