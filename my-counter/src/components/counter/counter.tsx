import React, { useState } from "react";
import { Button } from "./button/button";
import { Count } from "./count/count";
import "./counter.css";

type CounterProps = {
  className: string;
};
export const Counter = (props: CounterProps) => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);
  const countTimes2 = count * 2;
  const listItems = [1, 1, 3, 4, 5, 6].map((num, i) => (
    <li key={i}>item number - {num}</li>
  ));
  return (
    <div className={props.className}>
      <Button sign="+" onClick={handleIncrement} />
      <Button sign="-" onClick={handleDecrement} />
      <Count count={count} />
      <div>Count * 2: {countTimes2}</div>
      <ul>{listItems}</ul>
    </div>
  );
};
