import React from "react";
import "./Sign.css";

const Sign = (props) => {
  return (
    <div
      className="card absolute border-dark bg-transparent text-white  mb-3"
      style={{
        maxWidth: "20rem",
        position: "absolute",
        bottom: 0,
        right: 15,
      }}
    >
      <div className="card-header">React Games Series</div>
      <div className="card-body">
        <h5 className="card-title">Game 1: Rock-Paper-Scissors</h5>
        <p className="card-text">Built by Julian C. Dev - March 2022. </p>
      </div>
    </div>
  );
};

export default Sign;
