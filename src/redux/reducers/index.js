import { combineReducers } from "redux";
import persist from "./persist.reducer";
import { reducer as formReducer } from "redux-form";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import loading from "./loading.reducer";
import userList from "./userList.reducer";
import globalReducer from "./global.reducer"

export const history = createBrowserHistory();

const appReducer = combineReducers({
  persist,
  form: formReducer,
  router: connectRouter(history),
  loading,
  globalReducer,
  userList,
 
});
const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_USERS_PERSIST") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
