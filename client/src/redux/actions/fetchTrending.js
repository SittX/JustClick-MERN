import { actionTypes } from ".";
import axios from "axios";
const fetchTrending = (url) => {
  return async function (dispatch) {
    try {
      dispatch({ type: actionTypes.fetch_request });
      const response = await axios.get(url);
      const data = response.data;
      dispatch({ type: actionTypes.fetch_trending_movies, payload: data });
    } catch (error) {
      dispatch({
        type: actionTypes.fetch_error,
        payload: error.message,
      });
    }
  };
};
export default fetchTrending;
