import { FiltersMap } from "../../contracts";
import { FiltersActions } from "./filters-list-actions";
import { filtersConstants } from "./filters-list-constants";

export type FiltersState = FiltersMap;

const initialState: FiltersState = {};

export function filtersReducer(
  state = initialState,
  action: FiltersActions
): FiltersState {
  switch (action.type) {
    case filtersConstants.FILTER_APPLY: {
      const { name, filterFunction } = action.payload;
      return {
        ...state,
        [name]: filterFunction,
      };
    }
    case filtersConstants.FILTER_REMOVE: {
      const { name } = action.payload;
      const { [name]: removed, ...rest } = state;
      return rest;
    }
    case filtersConstants.FILTER_REMOVE_ALL: {
      return {};
    }
    default: {
      return state;
    }
  }
}
