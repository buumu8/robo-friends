import axios from "axios";

import { CHANGE_SEARCH_FIELD, FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAIL } from "./constants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestRobots = () => async (dispatch) => {
  dispatch({ type: FETCH_REQUEST });
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = response.data;
    dispatch({ type: FETCH_SUCCESS, payload: data });
  } catch (err) {
    console.log(err);
    dispatch({ type: FETCH_FAIL, payload: err });
  }
};
