import React, { useState } from "react";
import { FiltersMap, ITodo } from "../../contracts";
import { applyFilters, todosFactory } from "../../utils/utils";
import { TodosListItem } from "./todos-list-item/todos-list-item";
import styles from "./todos-list.module.scss";

export function TodosList() {
  // move to redux state (with initial value)
  const [todosState, setTodosState] = useState<ITodo[]>([
    todosFactory.createTodo("Learn ReactJs", "blue"),
    todosFactory.createTodo("Order from 10Bis", "orange"),
  ]);
  // get the real filtersMap state from Redux
  const [filtersMap] = useState<FiltersMap>({});
  const filterFunctions = Object.values(filtersMap);
  const filteredTodos = applyFilters(todosState, filterFunctions);
  // TODO_CHANGE action (with payload)
  function handleChangeTodo<TProp extends keyof ITodo>(
    id: string,
    todoProp: TProp,
    value: ITodo[TProp]
  ): void {
    const todoIndex = todosState.findIndex((todo) => todo.id === id);
    const changedTodo = { ...todosState[todoIndex], [todoProp]: value };
    setTodosState((todos) => [
      ...todos.slice(0, todoIndex),
      changedTodo,
      ...todos.slice(todoIndex + 1),
    ]);
  }
  // TODO_DELETE action (with payload)
  function handleDeleteTodo(id: string) {
    setTodosState((todos) => todos.filter((todo) => todo.id !== id));
  }
  // TODO_CREATE action
  function handleNewTodo() {
    const newTodo: ITodo = todosFactory.createTodo();
    setTodosState((todos) => [...todos, newTodo]);
  }
  return (
    <>
      <h4>My Todos</h4>
      <button className={"StyledButton"} onClick={handleNewTodo}>
        + New Todo
      </button>
      <ul className={styles.todosList}>
        {filteredTodos.map((todo) => (
          <TodosListItem
            key={todo.id}
            {...todo}
            onChange={handleChangeTodo}
            onDelete={handleDeleteTodo}
          />
        ))}
      </ul>
    </>
  );
}
