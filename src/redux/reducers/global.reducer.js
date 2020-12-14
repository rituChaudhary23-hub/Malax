import { actionTypes } from "../actions/global.action";

const initialState = { 
  categoryName:{},
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GLOBAL_CATEGORY_NAME:
      return {
        ...state,
        categoryName: action.data,
      };

    default:
      return state;
  }
};

export default globalReducer;
