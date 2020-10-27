import React from "react";

type ButtonProps = {
  sign: string;
  onClick: () => void;
};
export const Button = (props: ButtonProps) => (
  <button onClick={props.onClick}>{props.sign}</button>
);
