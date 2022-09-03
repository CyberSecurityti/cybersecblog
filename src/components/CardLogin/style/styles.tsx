import styled from "styled-components";

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
   h1{
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
   }
`;
