import { actionTypes } from "../actions/persist.action";

const initialState = {
  c_user: {},
  c_temp_user: {},
};

const persist = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER_SUCCESS_PERSIST:
      return {
        ...state,
        c_user: action.data,
      };
    case actionTypes.LOGIN_USER_TEMP_PERSIST:
      return {
        ...state,
        c_temp_user: action.data,
      };
    case actionTypes.LOGOUT_USERS_PERSIST:
      let temp = { key: Math.random() };
      return { ...state, c_user: { temp } };
    default:
      return state;
  }
};

export default persist;
