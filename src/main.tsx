import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Outlet } from "react-router-dom";
import { RouterConfig } from "./routes";
import GlobalStyle from "./config/globalStyleConfig";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <>
        <GlobalStyle />
        <RouterConfig />
      </>
    </BrowserRouter>
  </React.StrictMode>
);
