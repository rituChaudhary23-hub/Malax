import { actionTypes } from "../actions/client.action";

const initialState = {
  userId: "",
};

const clientReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SAVE_USER_ID:
      return {
        ...state,
        userId: action.data,
      };
    default:
      return state;
  }
};

export default clientReducer;
