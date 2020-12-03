import React, { useRef } from "react";
import { ITodo } from "../../../contracts";
import { useThemeContext } from "../../../theme-context";
import { ColorPicker } from "../../color-picker/color-picker";
import styles from "./todos-list-item.module.scss";
interface TodosListItemProps extends ITodo {
  onDelete: (id: string) => void;
  onChange: <TProp extends keyof ITodo>(
    id: string,
    todoProp: TProp,
    value: ITodo[TProp]
  ) => void;
}
export function TodosListItem({
  id,
  done,
  description,
  color,
  onChange,
  onDelete,
}: TodosListItemProps) {
  const { theme } = useThemeContext();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange<TProp extends keyof ITodo>(
    todoProp: TProp,
    value: ITodo[TProp]
  ): void {
    onChange(id, todoProp, value);
  }
  return (
    <li className={styles.todosListItem}>
      <button onClick={() => inputRef.current?.focus()}>focus</button>
      <input
        onChange={() => handleChange("done", !done)}
        checked={done}
        type="checkbox"
        disabled={!description}
        style={{ color: theme.primary }}
      />
      <input
        ref={inputRef}
        type="text"
        placeholder="Task description..."
        onChange={(e) => handleChange("description", e.target.value)}
        value={description}
        disabled={!!done}
        className={done ? styles.done : ""}
      />
      <ColorPicker
        value={color}
        onChange={(newColor) => handleChange("color", newColor)}
      />
      <button onClick={() => onDelete(id)}>X</button>
    </li>
  );
}
