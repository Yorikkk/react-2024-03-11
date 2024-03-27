import React from "react";
import ReactDOM from 'react-dom/client';

import { App } from "./App";

const rootId = document.getElementById('root')!;

const rootDom = ReactDOM.createRoot(rootId); 

rootDom.render(<App />);
