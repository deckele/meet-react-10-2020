import { createStore, applyMiddleware } from "redux";
import { counterReducer } from "./counter-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { counterActions } from "./actions";

const composeEnhancers = composeWithDevTools({
  actionCreators: counterActions,
  trace: true,
  traceLimit: 25,
});
export const store = createStore(
  counterReducer,
  composeEnhancers(applyMiddleware())
);
