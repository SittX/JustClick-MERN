import axios from "axios";
import { actionTypes } from ".";
const fetchMovies = (url) => {
  return async function (dispatch) {
    try {
      dispatch({ type: actionTypes.fetch_request });
      const response = await axios.get(url);
      const data = response.data;
      dispatch({ type: actionTypes.fetch_queried_movie, payload: data });
    } catch (error) {
      dispatch({ type: actionTypes.fetch_error, payload: error.message });
    }
  };
};
export default fetchMovies;
