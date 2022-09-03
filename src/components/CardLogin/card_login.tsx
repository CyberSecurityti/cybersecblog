import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./style/styles";

export const CardLogin = (props: any): JSX.Element => {
   return (
      <Card onClick={() => props.wasClicked || props.closeCardMenu()}>
         <h1>Login</h1>
         <form action="" method="get">
            <label>Username:</label>
            <input
               type="text"
               name="username"
               placeholder="Digite seu username..."
            />
            <label>Password:</label>
            <input
               type="password"
               name="password"
               placeholder="Digite sua senha...."
            />
            <button type="submit">Enviar</button>
            <Link to={"/RedefinePassword"}>
               <p>Esqueceu a senha?</p>
            </Link>
            <hr />
               <button  id="singup">Criar Conta</button>

         </form>
      </Card>
   );
};
