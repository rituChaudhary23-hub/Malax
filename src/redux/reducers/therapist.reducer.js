import { actionTypes } from "../actions/therapist.action";

const initialState = {
  saveIdentityImage: {},
  savePayInfo: {},
  saveIdentity:{}
};

const therapistReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_THERAPIST_IMAGE:
      return {
        ...state,
        saveIdentityImage: action.data,
      };
    case actionTypes.SAVE_PAYMENT_INFO:
      return {
        ...state,
        savePayInfo: action.data,
      };
      case actionTypes.SAVE_IDENTITY_IMAGE:
        return {
          ...state,
          saveIdentity: action.data,
        };
      
    default:
      return state;
  }
};

export default therapistReducer;
