import React from "react";

interface TodosListItemProps {
  id: string;
  done: boolean;
  description: string;
  color: string;
  onDelete: (id: string) => void;
  onChange: (id: string) => void;
}
export function TodosListItem({
  id,
  done,
  description,
  color,
  onChange,
  onDelete,
}: TodosListItemProps) {
  return (
    <li>
      <input onChange={() => onChange(id)} checked={done} type="checkbox" />
      <div>{description}</div>
      <div style={{ backgroundColor: color }} />
      <button onClick={() => onDelete(id)}>X</button>
    </li>
  );
}
