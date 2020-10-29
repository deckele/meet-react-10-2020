import React, { useState } from "react";
import { Screen } from "./screen/screen";
import { calcConfig } from "../../constants";
import { Button } from "./button/button";
import "./calculator.scss";
export function Calculator() {
  const [result, setResult] = useState("0");
  const [isInitialized, setIsInitialized] = useState(true);
  function calculateResult(currentResult: string) {
    try {
      // eslint-disable-next-line no-eval
      const newResult = eval(currentResult);
      if (newResult === Infinity || newResult === -Infinity) {
        return "DEVIDED BY ZERO";
      }
      return newResult;
    } catch (e) {
      return "SYNTAX ERROR";
    }
  }
  function handleButtonClicked(sign: string) {
    switch (sign) {
      case "+":
      case "-":
      case "*":
      case "/": {
        isInitialized
          ? setResult(sign)
          : setResult((prev) => `${prev} ${sign} `);
        setIsInitialized(false);
        break;
      }
      case "=": {
        isInitialized
          ? setResult("0")
          : setResult((prev) => calculateResult(prev));
        setIsInitialized(true);
        break;
      }
      default: {
        isInitialized ? setResult(sign) : setResult((prev) => prev + sign);
        setIsInitialized(false);
        break;
      }
    }
  }
  const buttons = calcConfig.map((sign) => (
    <Button onClick={handleButtonClicked} key={sign} sign={sign} />
  ));
  return (
    <div className="calculator-wrapper">
      <Screen result={result} />
      <div className="calc-buttons-wrapper">{buttons}</div>
    </div>
  );
}
