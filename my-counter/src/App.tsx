import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcom to my counter app!</h1>
      <Counter />
    </div>
  );
}

export const Counter = () => {
  const handleIncrement = () => alert("incremented!");
  const handleDecrement = () => alert("decremented!");
  return (
    <div>
      <Button sign="+" onClick={handleIncrement} />
      <Button sign="-" onClick={handleDecrement} />
      <Count count={0} />
    </div>
  );
};

type ButtonProps = {
  sign: string;
  onClick: () => void;
};
export const Button = (props: ButtonProps) => (
  <button onClick={props.onClick}>{props.sign}</button>
);

type CountProps = {
  count: number;
};
export const Count = (props: CountProps) => (
  <div>Current count is: {props.count}</div>
);

export default App;
