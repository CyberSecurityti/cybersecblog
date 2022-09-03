import { createGlobalStyle } from 'styled-components';
import { colorWhite_Gray, primaryRedColor, primary_blackColor } from './colorPalette';



export default createGlobalStyle`

    * {
        margin: 0%;
        padding: 0%;
        outline: none;
        box-sizing: border-box;
        color: white;
    }

    body {
        font-family: sans-serif;
        background-color: ${primary_blackColor};
    }

    html, body, #root {
        height: 100%;
    }

    button {
        cursor: pointer;
        background-color: ${primaryRedColor};
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        font-weight: 700;
    }

    a {
        text-decoration: none;
        color: ${colorWhite_Gray};
    }

    ul {
        list-style: none;
    }


`

