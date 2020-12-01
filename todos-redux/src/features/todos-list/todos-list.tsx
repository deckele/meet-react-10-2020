import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState, FiltersMap, ITodo } from "../../contracts";
import { applyFilters } from "../../utils/utils";
import { todosActions } from "./todos-list-actions";
import { TodosListItem } from "./todos-list-item/todos-list-item";
import styles from "./todos-list.module.scss";

export function TodosList() {
  const todos = useSelector<AppState, ITodo[]>((state) => state.todos);
  const filtersMap = useSelector<AppState, FiltersMap>(
    (state) => state.filters
  );
  const dispatch = useDispatch();
  const filterFunctions = Object.values(filtersMap);
  const filteredTodos = applyFilters(todos, filterFunctions);

  return (
    <>
      <h4>My Todos</h4>
      <button
        className={"StyledButton"}
        onClick={() => dispatch(todosActions.todoCreate())}
      >
        + New Todo
      </button>
      <ul className={styles.todosList}>
        {filteredTodos.map((todo) => (
          <TodosListItem
            key={todo.id}
            {...todo}
            onChange={(id, todoProp, value) =>
              dispatch(todosActions.todoChange(id, todoProp, value))
            }
            onDelete={(id) => dispatch(todosActions.todoDelete(id))}
          />
        ))}
      </ul>
    </>
  );
}
