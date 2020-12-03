import { Dispatch } from "react";
import { connect } from "react-redux";
import { AppState, ITodo } from "../../contracts";
import { TodosList } from "./todos-list";
import { todosActions } from "./todos-list-actions";

function mapStateToProps(state: AppState) {
  return {
    todos: state.todos,
    filtersMap: state.filters,
  };
}
function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    todoCreate: () => dispatch(todosActions.todoCreate()),
    todoChange: <TProp extends keyof ITodo>(
      id: string,
      todoProp: TProp,
      value: ITodo[TProp]
    ) => dispatch(todosActions.todoChange(id, todoProp, value)),
    todoDelete: (id: string) => dispatch(todosActions.todoDelete(id)),
  };
}
export const TodosListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosList);
