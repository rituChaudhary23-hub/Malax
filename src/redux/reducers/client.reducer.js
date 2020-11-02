import { actionTypes } from "../actions/client.action";

const initialState = {
  userId: "",
  savePhone: {},
  saveashu: {},
  saveUser: {},
  saveHistory: {},
  saveCondition: {},
  saveData: {},
  saveMedicalData: {},
  saveConsent: {},
  saveLoc: {},  saveImage: {},

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
    case actionTypes.SAVE_INFO:
      return {
        ...state,
        saveUser: action.data,
      };

    case actionTypes.SAVE_USER_HISTORY:
      return {
        ...state,
        saveHistory: action.data,
      };
    case actionTypes.SAVE_USER_CONDITION:
      return {
        ...state,
        saveCondition: action.data,
      };
    case actionTypes.SAVE_PERSONAL_INFO:
      return {
        ...state,
        saveData: action.data,
      };

    case actionTypes.SAVE_MEDICAL_INFO:
      return {
        ...state,
        saveMedicalData: action.data,
      };

    case actionTypes.SAVE_CONSENT:
      return {
        ...state,
        saveConsent: action.data,
      };
    case actionTypes.SAVE_LOCATION:
      return {
        ...state,
        saveLoc: action.data,
      };
      case actionTypes.SAVE_USER_IMAGE:
        return {
          ...state,
          saveImage: action.data,
        };
  
    default:
      return state;
  }
};

export default clientReducer;
