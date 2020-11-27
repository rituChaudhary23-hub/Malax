import { actionTypes } from "../actions/therapist.action";

const initialState = {
  saveIdentityImage: {},
  savePayInfo: {},
  saveIdentity: {},
  saveLicensure: {},
  saveModality: {},
  saveAppointments: {},
  saveScheduledServices: {},
  
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
    case actionTypes.SAVE_LICENSURE_INFO:
      return {
        ...state,
        saveLicensure: action.data,
      };
    case actionTypes.SAVE_MODALITY_INFO:
      return {
        ...state,
        saveModality: action.data,
      };
    case actionTypes.SAVE_SCHEDULED_INFO:
      return {
        ...state,
        saveAppointments: action.data,
      };
    case actionTypes.SAVE_SCHEDULED_SERVICE_DETAILS:
      return {
        ...state,
        saveScheduledServices: action.data,
      };

      
      case actionTypes.SAVE_SERVICE_DETAIL:
        return {
          ...state,
          saveService: action.data,
        };

    default:
      return state;
  }
};

export default therapistReducer;
