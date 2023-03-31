import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      {/*<PersistGate persistor={persistor} loading={null}>*/}
      <App />
      {/*</PersistGate>*/}
    </Provider>
  </React.StrictMode>
);
