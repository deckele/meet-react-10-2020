import React, { useContext } from "react";
import "./App.scss";
import { FiltersList } from "./features/filters-list/filters-list";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { TodosListContainer } from "./features/todos-list/todos-list-container";
import { ThemeProvider } from "./theme-context";

// TodosList > TodosListItem {done: boolean, description: string, color: string}
// Filters: done / not done filter, color filter
// Todo actions: create todo, remove todo, update todo
// Filter actions: apply filter, remove filter, remove all filters
// Add devtools support

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className="App">
          <FiltersList />
          <TodosListContainer />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
