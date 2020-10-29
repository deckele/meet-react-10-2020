import React from "react";
import "./button.scss";

type ButtonProps = {
  className: string;
  sign: string;
  onClick: (sign: string) => void;
};
export function Button(props: ButtonProps) {
  function handleClick() {
    props.onClick(props.sign);
  }
  return (
    <button className={props.className} onClick={handleClick}>
      {props.sign}
    </button>
  );
}
