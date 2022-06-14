import { combineReducers } from "redux";

import { MoviesReducer } from "./movies/movies.reducer";

export const rootReducer = combineReducers({
  movies: MoviesReducer,
});
