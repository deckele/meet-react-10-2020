export type FilterFunction = typeof Array.prototype.filter;

export interface Filter {
  name: string;
  active: boolean;
  customFilter?: FilterFunction;
}
