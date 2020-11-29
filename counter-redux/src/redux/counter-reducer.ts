import { CounterActions } from "./actions";
import { counterConstants } from "./constants";

export type AppState = CounterState;

interface CounterState {
  value: number;
}
const initialState: CounterState = {
  value: 0,
};

export function counterReducer(
  state = initialState,
  action: CounterActions
): CounterState {
  switch (action.type) {
    case counterConstants.INCREMENT: {
      return {
        ...state,
        value: state.value + 1,
      };
    }
    case counterConstants.DECREMENT: {
      return {
        ...state,
        value: state.value - 1,
      };
    }
    case counterConstants.INCREMENT_BY_AMOUNT: {
      return {
        ...state,
        value: state.value + action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
