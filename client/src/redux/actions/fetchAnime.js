import axios from "axios";
import { actionTypes } from ".";
const fetchAnime = (url) => {
  return async function (dispatch) {
    try {
      dispatch({ type: actionTypes.fetch_request });
      const response = await axios.get(url);
      dispatch({ type: actionTypes.fetch_anime, payload: response.data });
    } catch (error) {
      dispatch({ type: actionTypes.fetch_error, payload: error.message });
    }
  };
};
export default fetchAnime;
