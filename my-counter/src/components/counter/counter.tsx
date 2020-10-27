import React, { useState } from "react";
import { Button } from "./button/button";
import { Count } from "./count/count";
import "./counter.css";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);
  return (
    <div>
      <Button sign="+" onClick={handleIncrement} />
      <Button sign="-" onClick={handleDecrement} />
      <Count count={count} />
    </div>
  );
};
