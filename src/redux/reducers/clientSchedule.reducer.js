import { actionTypes } from "../actions/clientSchedule.action";

const initialState = {
  saveLoc: {},
};

const clientScheduleReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
  
    case actionTypes.SAVE_LOCATION:
      return {
        ...state,
        saveLoc: action.data,
      };

    default:
      return state;
  }
};

export default clientScheduleReducer;
