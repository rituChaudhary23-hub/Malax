import { actionTypes } from "../actions/userList.action";

const initialState = { 
  categoryName:{},
};

const globalReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.GLOBAL_CATEGORY_NAME:
      return {
        ...state,
        saveUser: action.data,
      };

    default:
      return state;
  }
};

export default globalReducer;
