import React, { useEffect, useState } from "react";
import "./screen.scss";
type ScreenProps = {
  result: string;
};
export function Screen(props: ScreenProps) {
  const [isBlinking, setIsBlinking] = useState(false);
  useEffect(() => {
    setIsBlinking(true);
    const intervalId = setInterval(() => setIsBlinking(false), 60);
    return () => clearInterval(intervalId);
  }, [props.result]);
  return (
    <div className={"calc-screen " + (isBlinking ? "blink-out" : "")}>
      {props.result}
    </div>
  );
}
