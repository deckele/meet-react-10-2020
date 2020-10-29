import React from "react";
import "./button.scss";

type ButtonProps = {
  sign: string;
  onClick: (sign: string) => void;
};
export function Button(props: ButtonProps) {
  function handleClick() {
    props.onClick(props.sign);
  }
  return (
    <button className="calc-button" onClick={handleClick}>
      {props.sign}
    </button>
  );
}
