import React from "react";

const Button = (props) => {
  return (
    <button
      className="btn btn-primary  m-2 p-3"
      onClick={(e, i) => props.onButtonClicked(e.target.textContent)}
    >
      {props.children}
    </button>
  );
};

export default Button;
