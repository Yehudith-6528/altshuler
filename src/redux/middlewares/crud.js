import { actions } from "../actions";

const url = "http://localhost:3002/api";

export const getMovies =
  ({ dispatch }) =>
    (next) =>
      (action) => {
        if (action.type === "GET_MOVIES") {
          return fetch(`${url}/movies/getMovies`)
            .then((response) => response.json())
            .then((data) => {
              dispatch(actions.setMovies({ movies: data }));
            });
        }
        return next(action);
      };


export const getCoingecko =
  ({ dispatch }) =>
    (next) =>
      (action) => {
        if (action.type === "GET_COINGECKO") {
          return fetch(`https://api.coingecko.com/api/v3/exchange_rates`)
            .then((response) => response.json())
            .then((data) => {
              dispatch(actions.setCoingecko({ coingecko: data }));
            });
        }
        return next(action);
      };
