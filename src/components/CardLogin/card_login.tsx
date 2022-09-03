import React from "react";
import { Card } from "./style/styles";

export const CardLogin = (props: any): JSX.Element => {
   return (
      <Card onClick={() => props.wasClicked || props.closeCardMenu()}>
         <h1>Login</h1>
         <form action="" method="get">
            <label>Username:</label>
            <input type="text" name="username" placeholder='Digite seu username...'/>
            <label>Password:</label>
            <input type="password" name="password" placeholder='Digite sua senha....'/>
            <button type="submit">Enviar</button>
         </form>
      </Card>
   );
};
