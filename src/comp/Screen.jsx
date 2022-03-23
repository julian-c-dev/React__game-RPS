import React from "react";
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
      <div className="card">
        <div className="card h-100">
          <div className="card-body">
            <h4 className="card-title">{props.title}</h4>
          </div>
          <img
            src={renderImages()}
            width="90px"
            className="img-fluid "
            alt="RPS game"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Screen;
