import { actionTypes } from "../actions/client.action";

const initialState = {
  userId: "",
  savePhone:{},
  saveashu:{}

};

const clientReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SAVE_USER_ID:
      return {
        ...state,
        userId: action.data,
      };
      case actionTypes.SAVE_USER_PHONE:
        return {
          ...state,
          savePhone: action.data,
        };
        case actionTypes.GET_PHONE:
          return {
            ...state,
            saveashu: action.data,
          };

        

    default:
      return state;
  }
};

export default clientReducer;
