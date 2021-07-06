import React from "react";

export const NumberButton = props => {
  return (
    <button className="numberButton">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.number}
    </button>
  );
};
