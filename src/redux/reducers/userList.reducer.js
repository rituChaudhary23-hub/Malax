import { actionTypes } from "../actions/userList.action";

const initialState = {
  saveUser: [],
  forgotPassword: {},
  resetPassword: {},
};

const userList = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SUCCESS_REGISTER:
      return {
        ...state,
        saveUser: action.data,
      };

    case actionTypes.FETCH_FORGOT_PASSWORD:
      return {
        ...state,
        forgotPassword: action.data,
      };

    case actionTypes.FETCH_RESET_PASSWORD:
      return {
        ...state,
        resetPassword: action.data,
      };

    default:
      return state;
  }
};

export default userList;
