import { Color, Filter, ITodo } from "../contracts";

class Todo implements ITodo {
  constructor(
    public readonly id: string,
    public done: boolean,
    public description: string,
    public color: Color
  ) {}
}
class TodosFactory {
  private uniqueId = 0;
  private getUniqueId(): string {
    return String(this.uniqueId++);
  }
  public createTodo(description: string = "", color: Color = "black"): ITodo {
    return new Todo(this.getUniqueId(), false, description, color);
  }
}
export const todosFactory = new TodosFactory();

export function applyFilters<T>(array: T[], predicates: Filter[]): T[] {
  if (!predicates || predicates.length === 0) {
    return array;
  }
  return array.filter((value, i, arr) =>
    predicates.some((predicate) => predicate(value, i, arr))
  );
}
