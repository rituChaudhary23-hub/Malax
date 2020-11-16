import thunkMiddleware from "redux-thunk";
import rootReducer from "../redux/reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { applyMiddleware, compose, createStore } from "redux";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();


const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["persist", "user","clientScheduleReducer"]
};
const persistedReducer = persistReducer(persistConfig, rootReducer);


const configureStore = () => {
  const middlewares = [thunkMiddleware, routerMiddleware(history)];
 // redux devtools
 const enhancers =
 process.env.NODE_ENV === "development"
   ? composeWithDevTools(applyMiddleware(...middlewares))
   : applyMiddleware(...middlewares);
// create redux store
const store = createStore(persistedReducer, enhancers);
let persistor = persistStore(store);
return { store, persistor };
}

export default configureStore;
