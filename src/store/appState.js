import { actionConstants } from "../utils/constants";

const defaultState = {
  userData: {},
};

const appStateReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionConstants.SHOW_USER_DATA:
      return {
        ...state,
        userData: action.payload.user,
      };

    default:
      return state;
  }
};

export default appStateReducer;
