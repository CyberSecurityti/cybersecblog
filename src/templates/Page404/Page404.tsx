import { Page404div, TextArea } from "./style/style";
import { Link, Navigate} from "react-router-dom";
import {Howl,Howler} from 'howler'
import React from 'react';

const Prankkkk = () => {
   const sound = new Howl({
      src: 'https://memes.casa/audios/gemido-whatsapp.mp3',
      autoplay: true,
      loop:false,
      volume: 0.5,
   })
}
export const Page404 = () => {
   return (
      <Page404div>
         <div className="img">
            <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" />
            <img src="https://assets.codepen.io/5647096/Delorean.png" />
         </div>
         <TextArea>
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <h3>Voltar pra Home?</h3>
            <Link to={'/'} className="Link">
               Sim
            </Link>
            <a onClick={Prankkkk} >Não</a>
         </TextArea>
      </Page404div>
   );
};
