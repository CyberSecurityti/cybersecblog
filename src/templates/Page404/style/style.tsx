import styled from "styled-components";

const Page404div = styled.div`
   display: flex;
   width: 100%;
   height: 100%;
   justify-content: center;
   align-items: center;
   font-family: "Press Start 2P", cursive;
   h1 {
      color: red;
      font-size: 100px;
   }
   h2 {
      font-size: 50px;
   }
   h1,
   h2,
   h3 {
      margin-bottom: 40px;
   }
   @media only screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      img{
         width: 80vw;
         height: auto;
      }
      h1 {
         font-size: 50px;
      }
      h2 {
         font-size: 25px;
      }
   }
`;
const TextArea = styled.div`
   height: 50vh;
   a {
      cursor: pointer;
   }
   .Link {
      text-decoration: none;
      margin-right: 20px;
   }
   .Link:hover {
      color: red;
      text-decoration: underline;
   }
   @media only screen and (max-width: 768px) {
      width: 100%;
      margin: 25px auto;
      text-align: center;
      a:active {
         color: red;
         text-decoration: underline;
      }
   }
`;

export { Page404div, TextArea };
