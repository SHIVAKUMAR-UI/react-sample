import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from "./userActionTypes";

const initialState = {
  loading: false,
  user: [],
  error: ""
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_USER_SUCCESS:
      return {
        user: action.payload,
        loading: false,
        error: ""
      };
    case FETCH_USER_FAILURE:
      return {
        user: [],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
