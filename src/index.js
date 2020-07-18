import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index";
import App from "./components/App";
import "./index.css";

const initialState = {
  todos: [
    { id: 1, text: "Buy a milk", completed: false },
    { id: 2, text: "Buy a shampoo", completed: false },
    { id: 3, text: "Buy a toothbrush", completed: false },
  ],
};

const store = createStore(rootReducer, initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
