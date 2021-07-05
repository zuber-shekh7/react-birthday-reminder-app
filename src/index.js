import { React } from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import store from "./store";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
