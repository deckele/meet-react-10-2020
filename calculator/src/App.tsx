import React, { useState } from "react";
import "./App.scss";
import { Calculator } from "./components/calculator/calculator";

function App() {
  const [showCalc, setShowCalc] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setShowCalc((prev) => !prev)}>
        toggle calculator
      </button>
      {showCalc ? <Calculator /> : null}
    </div>
  );
}

export default App;
