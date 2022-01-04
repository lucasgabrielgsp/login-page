import { actionConstants } from "../utils/constants";

export function showUserData(userData) {
  console.log(userData);
  return {
    type: actionConstants.SHOW_USER_DATA,
    payload: {
      user: userData,
    },
  };
}

export function loginRequest(data) {
  return {
    type: actionConstants.LOGIN_REQUEST,
    payload: data,
  };
}

