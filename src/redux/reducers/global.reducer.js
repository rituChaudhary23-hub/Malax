import { actionTypes } from "../actions/global.action";

const initialState = { 
  categoryName: {},
  globalName: {},
  clientData:{}
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GLOBAL_CATEGORY_NAME:
      return {
        ...state,
        categoryName: action.data,
      };  case actionTypes.GLOBAL_CODES:
      return {
        ...state,
        globalName: action.data,


      };
      case actionTypes.GLOBAL_DATA_CODES:
        return {
          ...state,
          clientData: action.data,
  
  
        };
    
      
      
    default:
      return state;
  }
};

export default globalReducer;
