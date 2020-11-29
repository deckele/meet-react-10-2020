import { counterConstants } from "./constants";

type CounterActionsMap = typeof counterActions;
export type CounterActions = ReturnType<
  CounterActionsMap[keyof CounterActionsMap]
>;
export const counterActions = {
  increment() {
    return {
      type: counterConstants.INCREMENT,
    };
  },
  decrement() {
    return {
      type: counterConstants.DECREMENT,
    };
  },
  incrementByAmount(amount: number) {
    return {
      type: counterConstants.INCREMENT_BY_AMOUNT,
      payload: amount,
    };
  },
};
