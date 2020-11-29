import React, { ReactNode } from "react";
import { FilterFunction } from "../contracts";
import styles from "./filters-list-item.module.scss";

interface FiltersListItemProps {
  name: string;
  active: boolean;
  customFilter?: FilterFunction;
  customDisplay?: ReactNode;
  onApplyFilter: (name: string, customFilter?: FilterFunction) => void;
  onRemoveFilter: (name: string) => void;
}

export function FiltersListItem({
  name,
  active,
  customFilter,
  customDisplay,
  onApplyFilter,
  onRemoveFilter,
}: FiltersListItemProps) {
  function handleFilterChange() {
    if (active) {
      onRemoveFilter(name);
    } else {
      onApplyFilter(name, customFilter);
    }
  }
  return (
    <li className={styles.filtersListItem}>
      <input onChange={handleFilterChange} checked={active} type="checkbox" />
      {customDisplay ?? name}
    </li>
  );
}
