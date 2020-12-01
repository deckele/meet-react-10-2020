import React from "react";
import "./App.scss";
import { FiltersList } from "./features/filters-list/filters-list";
import { TodosList } from "./features/todos-list/todos-list";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// TodosList > TodosListItem {done: boolean, description: string, color: string}
// Filters: done / not done filter, color filter
// Todo actions: create todo, remove todo, update todo
// Filter actions: apply filter, remove filter, remove all filters
// Add devtools support

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FiltersList />
        <TodosList />
      </div>
    </Provider>
  );
}

export default App;
