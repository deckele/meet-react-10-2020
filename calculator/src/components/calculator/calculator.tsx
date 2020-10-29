import React, { useState } from "react";
import { Screen } from "./screen/screen";
import { calcConfig } from "../../constants";
import { Button } from "./button/button";
import "./calculator.scss";
export function Calculator() {
  const [result, setResult] = useState("0");
  const [isInitialized, setIsInitialized] = useState(true);
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
          : setResult((prev) => {
              try {
                // eslint-disable-next-line no-eval
                return eval(prev);
              } catch (e) {
                return "Syntax Error!";
              }
            });
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
