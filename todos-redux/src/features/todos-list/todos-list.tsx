import React from "react";
import { FiltersMap, ITodo } from "../../contracts";
import { useThemeContext } from "../../theme-context";
import { applyFilters } from "../../utils/utils";
import { TodosListItem } from "./todos-list-item/todos-list-item";
import styles from "./todos-list.module.scss";

interface TodosListProps {
  todos: ITodo[];
  filtersMap: FiltersMap;
  todoCreate: () => void;
  todoChange: <TProp extends keyof ITodo>(
    id: string,
    todoProp: TProp,
    value: ITodo[TProp]
  ) => void;
  todoDelete: (id: string) => void;
}
export function TodosList({
  todos,
  filtersMap,
  todoCreate,
  todoChange,
  todoDelete,
}: TodosListProps) {
  const { theme, toggleTheme } = useThemeContext();
  const filterFunctions = Object.values(filtersMap);
  const filteredTodos = applyFilters(todos, filterFunctions);

  return (
    <div style={{ color: theme.primary, backgroundColor: theme.background }}>
      <button onClick={toggleTheme}>Change Theme</button>
      <h4>My Todos</h4>
      <button className={"StyledButton"} onClick={todoCreate}>
        + New Todo
      </button>
      <ul className={styles.todosList}>
        {filteredTodos.map((todo) => (
          <TodosListItem
            key={todo.id}
            {...todo}
            onChange={todoChange}
            onDelete={todoDelete}
          />
        ))}
      </ul>
    </div>
  );
}
