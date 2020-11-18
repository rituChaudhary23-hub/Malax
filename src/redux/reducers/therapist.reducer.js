import { actionTypes } from "../actions/therapist.action";

const initialState = {

  saveImage: {},
};

const therapistReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SAVE_THERAPIST_IMAGE:
      return {
        ...state,
        saveImage: action.data,
      };

    default:
      return state;
  }
};

export default therapistReducer;
