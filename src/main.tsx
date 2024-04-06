import ReactDOM from "react-dom/client";

import { App } from "./App";

import "./styles.scss";
import { Provider } from "react-redux";
import { store } from "./redux";

const rootId = document.getElementById('root')!;

const rootDom = ReactDOM.createRoot(rootId); 

rootDom.render(
  <Provider store={store}>
    <App />
  </Provider>
);
