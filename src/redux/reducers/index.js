import { combineReducers } from "redux";
import { createBrowserHistory } from "history";

import { reducer as formReducer } from "redux-form";
import { connectRouter } from "connected-react-router";
export const history = createBrowserHistory();

const appReducer = combineReducers({
  form: formReducer,
  router: connectRouter(history),
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
