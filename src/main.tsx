import ReactDOM from "react-dom/client";

import { App } from "./App";

import "./styles.scss";

const rootId = document.getElementById('root')!;

const rootDom = ReactDOM.createRoot(rootId); 

rootDom.render(<App />);
