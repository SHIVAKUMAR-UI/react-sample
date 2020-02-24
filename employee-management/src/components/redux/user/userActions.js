import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from "./userActionTypes";
import axios from "axios";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  };
};

export const fetchUserSuccess = user => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user
  };
};

export const fetchUserFailure = error => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error
  };
};

export const fetchUser = () => {
  return dispatch => {
      dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
          const user = response.data;
          console.log(user);
          dispatch(fetchUserSuccess(user));
      })
      .catch(errorResponse => {
          const errorMessage = errorResponse.message;
          console.log(errorMessage);
          dispatch(fetchUserSuccess(errorMessage));
      });
  };
};
