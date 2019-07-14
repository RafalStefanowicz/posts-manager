import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import ModalRoot from "./Components/ModalRoot/ModalRoot";
import App from "./Components/App/App";
import store from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <ModalRoot />
    <App />
  </Provider>,

  document.getElementById("root")
);
