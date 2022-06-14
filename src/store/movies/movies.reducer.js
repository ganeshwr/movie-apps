import { MOVIES_ACTION_TYPE } from "./movies.types";

const INITIAL_STATE = {
  movies: [],
};

export const MoviesReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case MOVIES_ACTION_TYPE.SET_MOVIES:
      return {
        ...state,
        movies: payload,
      };
    default:
      return state;
  }
};
