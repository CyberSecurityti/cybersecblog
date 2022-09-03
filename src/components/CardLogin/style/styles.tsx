import styled from "styled-components";
import {
   primaryRedColor,
   secondaryRedColor,
} from "../../../config/colorPalette";

export const Card = styled.div`
   position: absolute;
   left: 70%;
   background: rgba(255, 255, 255, 0.03);
   border-radius: 16px;
   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
   backdrop-filter: blur(0.5px);
   -webkit-backdrop-filter: blur(0.5px);
   border: 1px solid rgba(255, 255, 255, 0.01);
   height: auto;
   width: 30%;
   h1 {
      text-align: center;
      margin: 5% 5%;
   }
   form {
      display: flex;
      flex-direction: column;
      input {
         color: black;
         height: 30px;
         margin: 10px 30px;
      }
      input::placeholder {
         color: #ccc;
         text-align: center;
      }
      label {
         text-align: left;
         margin-left: 5%;
      }
      button {
         margin: 15px auto;
      }
      p {
         text-align: center;
      }
      p:hover {
         color: ${secondaryRedColor};
         transition: 1s;
      }
      hr {
         width: 60%;
         margin: 15px auto;
      }
      #singup {
         background-color: black;
         color: ${primaryRedColor};
      }
   }
   @media (max-width: 900px) {
      width: 60%;
      left: 40%;
   }
`;
