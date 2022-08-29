import { Page404div, TextArea } from "./style/style";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";

export const Page404 = () => {
   const [time, setTime] = useState(3);
   const timeout = useRef(0);
   const navigate = useNavigate();

   useEffect(() => {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        setTime((t) => t - 1);
      }, 1000);

      if (time < 0) {
        navigate("/");
      }
      return () => {
        clearTimeout(timeout.current);
      };
    }, [time]);

   return (
      <Page404div>
         <div className="img">
            <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" />
            <img src="https://assets.codepen.io/5647096/Delorean.png" />
         </div>
         <TextArea>
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <h3>Voltando para a página inicial! {time}</h3>
         </TextArea>
      </Page404div>
   );
};
