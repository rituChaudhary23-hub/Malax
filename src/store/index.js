import thunkMiddleware from "redux-thunk";
import rootReducer from "../redux/reducers/index";

import { applyMiddleware, compose, createStore } from "redux";
import { createBrowserHistory } from "history";

let store;
const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureStore(initialState) {
  store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );

  return store;
}
export { history, store };

