import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { AuthContextProvider } from "./contexts/AuthContext"

import {BrowserRouter} from "react-router-dom"
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById("root")
);