import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import GlobalStyle from "./styles/GlobalStyle";
import ModalRoot from "./Components/ModalRoot/ModalRoot";
import App from "./Components/App/App";
import store from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <ModalRoot />
    <GlobalStyle />
    <App />
  </Provider>,

  document.getElementById("root")
);
