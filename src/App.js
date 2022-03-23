import React, { useState } from "react";
import "./app.css";
import Control from "./comp/Control";
import Screen from "./comp/Screen";
import Sign from "./comp/Sign";

function App() {
  // * States:
  let [wins, setWins] = useState(0);
  let [losses, setLosses] = useState(0);
  let [ties, setTies] = useState(0);
  // * Displays:
  let [userDisplay, setUserDisplay] = useState("rock");
  let [pcDisplay, setPcDisplay] = useState("paper");
  let [resultDisplay, setResult] = useState("scissors");
  // * Variables
  const myChoices = ["rock", "paper", "scissors"];
  let userSelection, pcSelection;

  // & User Selection Function
  const onHandleUserChoice = (userChoice) => {
    if (userChoice === "rock") {
      setUserDisplay(userChoice);
      userSelection = 0;
    }
    if (userChoice === "paper") {
      setUserDisplay(userChoice);
      userSelection = 1;
    }
    if (userChoice === "scissors") {
      setUserDisplay(userChoice);
      userSelection = 2;
    }
    generateComputerChoice();
  };

  // & AI Function
  function generateComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    pcSelection = randomNum;

    generateResult(userSelection, pcSelection);

    setPcDisplay(myChoices[randomNum]);
  }

  // & Logic Function
  function generateResult(a, b) {
    if (a === b) {
      setResult("draw");
      return setTies(++ties);
    } else if ((a - b + 3) % 3 === 1) {
      setResult("win");
      return setWins(++wins);
    } else {
      setResult("lose");
      return setLosses(++losses);
    }
  }

  return (
    <div className="container ">
      <h1 className="title"> The Amazing Rock-Paper-Scissors </h1>
      <div className="row ">
        <div className="col">
          <Screen title="Player picks" img={userDisplay} />
        </div>
        <div className="col">
          <Screen title="AI picks" img={pcDisplay} />
        </div>
        <div className="col">
          <Screen title="Game Result" img={resultDisplay} />
        </div>
      </div>

      <br />
      <Control
        choices={myChoices}
        onHandleClick={onHandleUserChoice}
        winsGames={wins}
        lossesGames={losses}
        tiesGames={ties}
      />
      <Sign />
    </div>
  );
}

export default App;
