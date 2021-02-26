import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./WeatherApp";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store/store.js";
import history from "./history";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={"Loading"}>
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
