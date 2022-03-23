import React from "react";
import Button from "./Button";

const Panel = (props) => {
  let choices = props.choices;

  return (
    <div>
      {choices.map((item) => (
        <Button key={item} onButtonClicked={props.onHandleClick}>
          {item}
        </Button>
      ))}
    </div>
  );
};

export default Panel;
