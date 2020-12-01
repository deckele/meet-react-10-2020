import React from "react";
import { colors, doneStatusMap } from "../../constants";
import { ColorIcon } from "../color-icon/color-icon";
import { FiltersMap, ITodo, AppState, Filter } from "../../contracts";
import { FiltersListItem } from "./filters-list-item/filters-list-item";
import styles from "./filters-list.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { filtersActions } from "./filters-list-actions";

export function FiltersList() {
  const filtersMap = useSelector<AppState, FiltersMap>(
    (state) => state.filters
  );
  const dispatch = useDispatch();
  function handleApplyFilter(name: string, predicate: Filter) {
    dispatch(filtersActions.filterApply(name, predicate));
  }
  function handleRemoveFilter(name: string) {
    dispatch(filtersActions.filterRemove(name));
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
      <button onClick={() => dispatch(filtersActions.filterRemoveAll())}>
        Remove All
      </button>
    </>
  );
}
