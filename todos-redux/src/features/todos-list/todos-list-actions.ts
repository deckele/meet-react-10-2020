import { ITodo } from "../../contracts";
import { todosConstants } from "./todos-list-constants";

type TodosActionsMap = typeof todosActions;
export type TodosActions = ReturnType<TodosActionsMap[keyof TodosActionsMap]>;
export const todosActions = {
  todoChange<TProp extends keyof ITodo>(
    id: string,
    todoProp: TProp,
    value: ITodo[TProp]
  ) {
    return {
      type: todosConstants.TODO_CHANGE,
      payload: { id, todoProp, value },
    };
  },
  todoCreate() {
    return {
      type: todosConstants.TODO_CREATE,
    };
  },
  todoDelete(id: string) {
    return {
      type: todosConstants.TODO_DELETE,
      payload: { id },
    };
  },
};
