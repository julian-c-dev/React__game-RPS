import React from "react";
import Button from "./Button";
import "./Control.css";

const Control = (props) => {
  let choices = props.choices;

  return (
    <div className="control">
      <div className="control_body">
        <div>
          <h4>Choose an option to play</h4>
          {choices.map((item) => (
            <Button key={item} onButtonClicked={props.onHandleClick}>
              {item}
            </Button>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <span className="badge bg-success p-2  me-2">You Win: </span>
          <strong> {props.winsGames}</strong>
        </div>
        <div className="col">
          <span className="badge bg-danger p-2 me-2">You Lose: </span>
          <strong>{props.lossesGames}</strong>
        </div>
        <div className="col">
          <span className="badge bg-warning p-2 me-2"> You Tie: </span>
          <strong> {props.tiesGames}</strong>
        </div>
      </div>
    </div>
  );
};

export default Control;
