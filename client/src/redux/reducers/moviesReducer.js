import { actionTypes } from "../actions";
const initialState = {
  movies: "",
  anime: "",
  trending: "",
  loading: false,
  error: null,
};
const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.fetch_request:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.fetch_success:
      return {
        ...state,
        loading: false,
        movies: action.payload,
        error: null,
      };
    case actionTypes.fetch_error:
      return {
        ...state,
        error: action.payload,
      };

    case actionTypes.fetch_trending_movies:
      return {
        ...state,
        loading: false,
        trending: action.payload,
        error: null,
      };
    case actionTypes.fetch_queried_movie:
      return {
        ...state,
        loading: false,
        movies: action.payload,
        error: null,
      };
    case actionTypes.fetch_anime:
      return {
        ...state,
        loading: false,
        anime: action.payload,
        error: null,
      };

    default:
      return state;
  }
};
export default moviesReducer;
