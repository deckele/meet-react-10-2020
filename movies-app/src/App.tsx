import React from "react";
import "./App.css";
import { MoviesList } from "./components/movies-list/movies-list";
import { MoviesResponse } from "./contracts";

/*
1. ul > MoviesList
2. li > MoviesListItem
3. in MoviesList > useEffect to call the moveis api
4. in MoviesList > movies,setMovies - useState.
*/

function App() {
  return (
    <div className="App">
      <MoviesList />
    </div>
  );
}

export default App;
