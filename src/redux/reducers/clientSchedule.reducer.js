import { actionTypes } from "../actions/clientSchedule.action";

const initialState = {
  getAppointment: {},
  getServiceDetails:{},
  getServiceStatus:{}
};

const clientScheduleReducer = (state = initialState, action) => {
  debugger
  console.log(action);
  switch (action.type) {
    
    case actionTypes.SAVE_APPOINTMENTS:
      return {
        ...state,
        getAppointment: action.data ,
      };
      
      case actionTypes.SAVE_SERVICE_DETAIL:
      return {
        ...state,
        getServiceDetails: action.data ,
      };

      case actionTypes.SAVE_SERVICE_STATUS:
        return {
          ...state,
          getServiceStatus: action.data ,
        };
      
    default:
      return state;
  }
};

export default clientScheduleReducer;
