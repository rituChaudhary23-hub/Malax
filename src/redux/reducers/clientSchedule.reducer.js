import { actionTypes } from "../actions/clientSchedule.action";

const initialState = {
  getAppointment: {},
};

const clientScheduleReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    
    case actionTypes.SAVE_APPOINTMENTS:
      return {
        ...state,
        getAppointment: action.data,
      };

    default:
      return state;
  }
};

export default clientScheduleReducer;
