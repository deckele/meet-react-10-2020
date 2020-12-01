import { combineReducers } from "redux";
import { filtersReducer } from "../features/filters-list/filters-list-reducer";
import { todosReducer } from "../features/todos-list/todos-list-reducer";

export const rootReducer = combineReducers({
  filters: filtersReducer,
  todos: todosReducer,
});
