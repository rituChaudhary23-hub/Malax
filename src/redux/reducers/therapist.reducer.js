import { actionTypes } from "../actions/therapist.action";

const initialState = {

  saveIdentityImage: {},
};

const therapistReducer = (state = initialState, action) => {
  debugger
  console.log(action);
  switch (action.type) {
    case actionTypes.SAVE_THERAPIST_IMAGE:
      return {
        ...state,
        saveIdentityImage: action.data,
      };

    default:
      return state;
  }
};

export default therapistReducer;
