import { actionTypes } from "../actions/user.action";

const initialState = {
  meta: {},
  user: {},
};

const user = (state = initialState, action) => {
  //debugger
  switch (action.type) {
    case actionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default user;
