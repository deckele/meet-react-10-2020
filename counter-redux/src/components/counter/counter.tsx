import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../redux/actions";
import { AppState } from "../../redux/counter-reducer";
export function Counter() {
  const count = useSelector<AppState>((state) => state.value);
  const dispatch = useDispatch();
  const [incrementStep, sertIncrementStep] = useState(2);
  return (
    <div>
      Count is: {count}
      <div>
        set increment amount:
        <input
          value={incrementStep}
          onChange={(e) => sertIncrementStep(Number(e.target.value))}
          type="number"
        />
      </div>
      <div>
        <button onClick={() => dispatch(counterActions.increment())}>+</button>
        <button onClick={() => dispatch(counterActions.decrement())}>-</button>
        <button
          onClick={() =>
            dispatch(counterActions.incrementByAmount(incrementStep))
          }
        >
          Increment by amount
        </button>
      </div>
    </div>
  );
}
