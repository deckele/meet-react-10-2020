import React, { useState } from "react";
import { colors, doneStatusMap } from "../../constants";
import { ColorIcon } from "../color-icon/color-icon";
import { FiltersMap, Filter, ITodo } from "../../contracts";
import { FiltersListItem } from "./filters-list-item/filters-list-item";
import styles from "./filters-list.module.scss";

export function FiltersList() {
  const [filtersState, setFiltersState] = useState<FiltersMap>({});
  function handleApplyFilter(name: string, filterFunction: Filter): void {
    setFiltersState((prev) => ({
      ...prev,
      [name]: filterFunction,
    }));
  }
  function handleRemoveFilter(name: string): void {
    setFiltersState(({ [name]: removed, ...rest }) => rest);
  }
  function handleRemoveAllFilters(): void {
    setFiltersState({});
  }
  const doneStateFilters = Object.keys(doneStatusMap).map((name) => (
    <FiltersListItem
      key={name}
      active={!!filtersState[name]}
      name={name}
      filterFunction={(todo: ITodo) =>
        !!todo.done === doneStatusMap[name as keyof typeof doneStatusMap]
      }
      onApplyFilter={handleApplyFilter}
      onRemoveFilter={handleRemoveFilter}
    />
  ));
  const colorFilters = colors.map((color) => (
    <FiltersListItem
      key={color}
      active={!!filtersState[color]}
      name={color}
      filterFunction={(todo: ITodo) => todo.color === color}
      onApplyFilter={handleApplyFilter}
      onRemoveFilter={handleRemoveFilter}
      customDisplay={<ColorIcon color={color} />}
    />
  ));
  const allFilters = [...doneStateFilters, colorFilters];

  return (
    <>
      <span className={styles.filtersListTitle}>Filters: </span>
      <ul className={styles.filtersList}>{allFilters}</ul>
      <button onClick={handleRemoveAllFilters}>Remove All</button>
    </>
  );
}
