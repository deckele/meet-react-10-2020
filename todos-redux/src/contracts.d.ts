import { colors } from "./constants";

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
