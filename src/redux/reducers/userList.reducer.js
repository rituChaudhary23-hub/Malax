import { actionTypes } from "../actions/userList.action";

const initialState = { 
  saveUser: [],

};

const userList = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.FETCH_REGISTER:
      return {
        ...state,
        saveUser: action.data,
      };


    default:
      return state;
  }
};

export default userList;
