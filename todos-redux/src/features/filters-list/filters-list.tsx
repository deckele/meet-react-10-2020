import React, { useState } from "react";
import { colors } from "../../constants";
import { ColorIcon } from "../color-icon/color-icon";
import { Filter, FilterFunction } from "./contracts";
import { FiltersListItem } from "./filters-list-item/filters-list-item";
import styles from "./filters-list.module.scss";

type FiltersCache = { [filterName: string]: Filter };
export function FiltersList() {
  const [filtersCache, setFiltersCache] = useState<FiltersCache>({});
  function handleApplyFilter(
    name: string,
    customFilter?: FilterFunction
  ): void {
    setFiltersCache((prev) => ({
      ...prev,
      [name]: { active: true, name, customFilter },
    }));
  }
  function handleRemoveFilter(name: string): void {
    setFiltersCache(({ [name]: removed, ...rest }) => rest);
  }
  const doneStateFilters = ["Done", "Not done"].map((name) => (
    <FiltersListItem
      key={name}
      name={name}
      active={!!filtersCache[name]?.active}
      onApplyFilter={handleApplyFilter}
      onRemoveFilter={handleRemoveFilter}
    />
  ));
  const colorFilters = colors.map((color) => (
    <FiltersListItem
      key={color}
      name={color}
      active={!!filtersCache[color]?.active}
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
    </>
  );
}
