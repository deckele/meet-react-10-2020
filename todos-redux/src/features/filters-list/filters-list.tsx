import React, { useState } from "react";
import { colors, doneStatusMap } from "../../constants";
import { ColorIcon } from "../color-icon/color-icon";
import { FiltersMap, Filter, ITodo } from "../../contracts";
import { FiltersListItem } from "./filters-list-item/filters-list-item";
import styles from "./filters-list.module.scss";

export function FiltersList() {
  // move to redux state (with initial value)
  const [filtersMap, setFiltersMap] = useState<FiltersMap>({});
  // FILTER_APPLY
  function handleApplyFilter(name: string, filterFunction: Filter): void {
    setFiltersMap((prev) => ({
      ...prev,
      [name]: filterFunction,
    }));
  }
  // FILTER_REMOVE
  function handleRemoveFilter(name: string): void {
    setFiltersMap(({ [name]: removed, ...rest }) => rest);
  }
  // FILTER_REMOVE_ALL
  function handleRemoveAllFilters(): void {
    setFiltersMap({});
  }
  const doneStateFilters = Object.keys(doneStatusMap).map((name) => (
    <FiltersListItem
      key={name}
      active={!!filtersMap[name]}
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
      active={!!filtersMap[color]}
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
