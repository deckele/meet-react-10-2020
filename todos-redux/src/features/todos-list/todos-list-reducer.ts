import { ITodo } from "../../contracts";
import { todosFactory } from "../../utils/utils";
import { TodosActions } from "./todos-list-actions";
import { todosConstants } from "./todos-list-constants";

export type TodosState = ITodo[];

const initialState: TodosState = [
  todosFactory.createTodo("Learn ReactJs", "blue"),
  todosFactory.createTodo("Order from 10Bis", "orange"),
];

export function todosReducer(
  state = initialState,
  action: TodosActions
): TodosState {
  switch (action.type) {
    case todosConstants.TODO_CHANGE: {
      const { id, todoProp, value } = action.payload;
      const todoIndex = state.findIndex((todo) => todo.id === id);
      const changedTodo = { ...state[todoIndex], [todoProp]: value };
      return [
        ...state.slice(0, todoIndex),
        changedTodo,
        ...state.slice(todoIndex + 1),
      ];
    }
    case todosConstants.TODO_CREATE: {
      const newTodo: ITodo = todosFactory.createTodo();
      return [...state, newTodo];
    }
    case todosConstants.TODO_DELETE: {
      const { id } = action.payload;
      return state.filter((todo) => todo.id !== id);
    }
    default: {
      return state;
    }
  }
}
