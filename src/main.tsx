import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./routes";
import GlobalStyle from "./config/globalStyleConfig";
import { HeaderNav } from "./components/header/Navigation";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <BrowserRouter>
         <HeaderNav />
         <>
            <GlobalStyle />
            <RouterConfig />
         </>
      </BrowserRouter>
   </React.StrictMode>
);
