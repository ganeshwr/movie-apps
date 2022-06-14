import { MOVIES_ACTION_TYPE } from "./movies.types";

const createAction = (type, payload) => ({ type, payload });

export const setMovies = (movies) => {
  return createAction(MOVIES_ACTION_TYPE.SET_MOVIES, movies);
};
