import React, { ReactNode } from "react";
import { Filter } from "../../../contracts";
import styles from "./filters-list-item.module.scss";

interface FiltersListItemProps {
  name: string;
  active: boolean;
  filterFunction?: Filter;
  customDisplay?: ReactNode;
  onApplyFilter: (name: string, predicate: Filter) => void;
  onRemoveFilter: (name: string) => void;
}

export function FiltersListItem({
  name,
  active,
  filterFunction = (value: any) => value !== name,
  customDisplay,
  onApplyFilter,
  onRemoveFilter,
}: FiltersListItemProps) {
  function handleFilterChange() {
    if (active) {
      onRemoveFilter(name);
    } else {
      onApplyFilter(name, filterFunction);
    }
  }
  return (
    <li className={styles.filtersListItem}>
      <input
        onChange={handleFilterChange}
        checked={active ?? false}
        type="checkbox"
      />
      {customDisplay ?? name}
    </li>
  );
}
