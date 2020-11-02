import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import configureStore from "./store/index";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  HashRouter,
} from "react-router-dom";
import "../src/assets/scss/style.scss";
import "../src/assets/scss/comman.scss";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./store/history";
import LoaderComponent from "./Components/LoaderComponent/LoaderComponent";
import { PersistGate } from "redux-persist/lib/integration/react";

// export const store = configureStore();
let { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <LoaderComponent></LoaderComponent>

        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
