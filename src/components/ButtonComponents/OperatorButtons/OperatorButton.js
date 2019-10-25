import React from "react";
import { tsPropertySignature } from "@babel/types";

export const OperatorButton = props => {
  console.log(props.operator.char);
  return (
    <button className="operatorButton">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.operator.char}
    </button>
  );
};
