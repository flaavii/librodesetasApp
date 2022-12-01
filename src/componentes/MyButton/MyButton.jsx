import "./mybutton.css";
import React from "react";

function MyButton(props) {

  return (
    <button
      onClick={props.onTouchButton}
      className="button"
    >
      {props.children}
    </button>
  );
}


export default MyButton;