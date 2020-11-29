import React from "react";
import "./App.css";
import { FiltersList } from "./features/filters-list/filters-list";

// TodosList > TodosListItem {done: boolean, description: string, colorCode: string}
// Filters: done / not done filter, colorCode filter
// Todo actions: add todo, remove todo, update todo
// Filter actions: apply filter, remove filter, remove all filters

function App() {
  return (
    <div className="App">
      <FiltersList />
    </div>
  );
}

export default App;
