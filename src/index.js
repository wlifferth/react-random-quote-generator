import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import quoteReducer from "./reducer";
import "./index.css";
import App from "./App";
import { getNewQuote } from "./actions";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  quoteReducer,
  {},
  composeEnhancer(applyMiddleware(thunk))
);

store.dispatch(getNewQuote());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
  </React.StrictMode>,
  document.getElementById("root")
);
