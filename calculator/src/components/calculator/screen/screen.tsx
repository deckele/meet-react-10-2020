import React, { useEffect, useState } from "react";
import "./screen.scss";
type ScreenProps = {
  result: string;
};
export function Screen(props: ScreenProps) {
  const [isBlinking, setIsBlinking] = useState(false);
  useEffect(() => {
    // side effect (father) function
    setIsBlinking(true);
    const id = setTimeout(() => setIsBlinking(false), 100);
    const count = localStorage.getItem("count") || 0;
    localStorage.setItem("count", Number(count) + 1 + "");
    console.log("count is: ", count);
    // cleanup (return nested) function
    return () => {
      console.log("cleanup count is: ", count);
      clearTimeout(id);
    };
  }, [props.result]);

  // runs after render only if props.result changed
  useEffect(() => localStorage.setItem("screen", props.result), [props.result]);
  // onChange: no dependency array as second arg.
  useEffect(() => {
    console.log("onChange");
  });
  // onMount / onUnmount: empty dependency array.
  useEffect(() => {
    console.log("OnMount");
    return () => console.log("OnUnmount");
  }, []);
  useEffect(() => {
    function handleMouseMoved(e: MouseEvent) {
      console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
    }
    document.documentElement.addEventListener("mousemove", handleMouseMoved);
    return () => {
      document.documentElement.removeEventListener(
        "mousemove",
        handleMouseMoved
      );
    };
  }, []);

  return (
    <div className={"calc-screen " + (isBlinking ? "blink-out" : "")}>
      {props.result}
    </div>
  );
}
