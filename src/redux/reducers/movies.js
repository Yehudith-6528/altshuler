import produce from "immer";
import createReducer from "./reducerUtils";

const initalStaste = {
  coingecko: [],
};

const user = {

  setCoingecko(state, action) {
    state.coingecko = action.payload.coingecko;
  },
  addMovie(state, action) {
    if (
      state.movies[state.movies.length - 1]?.rating <
      action.payload.movie?.rating
    ) {
      state.movies.pop();
      let index = state.movies.findIndex((movie) => movie.rating < action.payload.movie.rating);
      if (index > 0) index--;
      state.movies.splice(index, 0, action.payload.movie)
    }
  },
  
};

export default produce(
  (state, action) => createReducer(state, action, user),
  initalStaste
);
