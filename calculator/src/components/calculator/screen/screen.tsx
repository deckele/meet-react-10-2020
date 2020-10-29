import React from "react";
import "./screen.scss";
type ScreenProps = {
  result: string;
};
export function Screen(props: ScreenProps) {
  return <div className="calc-screen">{props.result}</div>;
}
