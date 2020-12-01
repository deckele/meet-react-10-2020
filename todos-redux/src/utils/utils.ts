import { Filter, ITodo } from "../contracts";

class Todo implements ITodo {
  constructor(
    public id: string,
    public done = false,
    public description = "",
    public color = "black" as const
  ) {}
}
class TodosFactory {
  private uniqueId = 0;
  private getUniqueId(): string {
    return String(this.uniqueId++);
  }
  public createTodo(): ITodo {
    return new Todo(this.getUniqueId());
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
