import React, { useState } from "react";
import { FaRegWindowClose, FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { logo } from "../../config/colorPalette";
import { activeStyle, Nav } from "./styles/stylesnav";
import { CardLogin } from "../CardLogin/card_login";

export const NavLinks = () => {
   const [abrir, setOpen] = useState(false);

   const closeIcon = (
      <FaRegWindowClose
         size="40px"
         color="red"
         onClick={() => {
            setOpen(!abrir);
         }}
      />
   );
   const userIcon = (
      <FaUserCircle
         className="icon"
         size="40px"
         color="red"
         onClick={() => {
            setOpen(!abrir);
         }}
      />
   );
   const closeCardMenu = () => setOpen(!abrir);

   return (
      <>
         <Nav>
            <div>
               <img src={logo} alt="logo" />
            </div>
            <li>
               <NavLink
                  to={"/"}
                  style={({ isActive }): any => {
                     return isActive ? activeStyle : undefined;
                  }}
               >
                  Home
               </NavLink>
            </li>
            <li>
               <NavLink
                  to={"/courses"}
                  style={({ isActive }): any => {
                     return isActive ? activeStyle : undefined;
                  }}
               >
                  Cursos
               </NavLink>
            </li>
            <li>
               <NavLink
                  to={"/articles"}
                  style={({ isActive }): any => {
                     return isActive ? activeStyle : undefined;
                  }}
               >
                  Artigos
               </NavLink>
            </li>
            <li>{abrir ? closeIcon : userIcon}</li>
         </Nav>
         {abrir && (
            <CardLogin wasClicked={true} closeCardMenu={closeCardMenu} />
         )}
      </>
   );
};
