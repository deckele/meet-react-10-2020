import { colors } from "./constants";
import { TodosState } from "./features/todos-list/todos-list-reducer";
import { FiltersState } from "./features/filters-list/filters-list-reducer";

export type AppState = {
  todos: TodosState;
  filters: FiltersState;
};

export type Filter = Parameters<typeof Array.prototype.filter>[0];

export interface FiltersMap {
  [name: string]: Filter;
}

export interface ITodo {
  id: string;
  done: boolean;
  description: string;
  color: Color;
}

export type Color = typeof colors[number];
