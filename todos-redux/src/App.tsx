import React from "react";
import "./App.css";
import { FiltersList } from "./features/filters-list/filters-list";
import { TodosList } from "./features/todos-list/todos-list";

// TodosList > TodosListItem {done: boolean, description: string, color: string}
// Filters: done / not done filter, color filter
// Todo actions: create todo, remove todo, update todo
// Filter actions: apply filter, remove filter, remove all filters

function App() {
  return (
    <div className="App">
      <FiltersList />
      <TodosList />
    </div>
  );
}

export default App;
