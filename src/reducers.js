import { CHANGE_SEARCH_FIELD, FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAIL } from "./constants";

const initialState = {
  searchField: "",
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };

    default:
      return state;
  }
};

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: "",
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, isPending: true };
    case FETCH_SUCCESS:
      return { ...state, isPending: false, robots: action.payload };
    case FETCH_FAIL:
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};
