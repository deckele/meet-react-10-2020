import { Filter } from "../../contracts";
import { filtersConstants } from "./filters-list-constants";

type FiltersActionsMap = typeof filtersActions;
export type FiltersActions = ReturnType<
  FiltersActionsMap[keyof FiltersActionsMap]
>;
export const filtersActions = {
  filterApply(name: string, filterFunction: Filter) {
    return {
      type: filtersConstants.FILTER_APPLY,
      payload: { name, filterFunction },
    };
  },
  filterRemove(name: string) {
    return {
      type: filtersConstants.FILTER_REMOVE,
      payload: { name },
    };
  },
  filterRemoveAll() {
    return {
      type: filtersConstants.FILTER_REMOVE_ALL,
    };
  },
};
