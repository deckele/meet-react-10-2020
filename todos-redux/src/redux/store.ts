import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { todosActions } from "../features/todos-list/todos-list-actions";
import { filtersActions } from "../features/filters-list/filters-list-actions";

const composeEnhancers = composeWithDevTools({
  actionCreators: { ...todosActions, ...filtersActions },
  trace: true,
  traceLimit: 25,
  serialize: true,
});
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware())
);
