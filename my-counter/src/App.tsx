import React, { useState } from "react";
import "./App.css";
import { Counter } from "./components/counter/counter";

function App() {
  const [showCounter, setShowCounter] = useState(true);
  const [counterVisibility, setCounterVisibility] = useState(true);
  return (
    <div className="App">
      <h1>Welcom to my counter app!</h1>
      <button onClick={() => setShowCounter((prev) => !prev)}>
        toggle show counter
      </button>
      <button onClick={() => setCounterVisibility((prev) => !prev)}>
        toggle counter visibility
      </button>
      {showCounter ? (
        <Counter className={counterVisibility ? "" : "hidden"} />
      ) : null}
      <footer>My Footer!</footer>
    </div>
  );
}

export default App;
