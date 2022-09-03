import { CSSProperties } from 'react';
import styled from 'styled-components';
import { primaryRedColor } from '../../../config/colorPalette';

export const Nav = styled.ul`
    background-color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
        width: 82px;
        height: 82px;
    }
    .icon {
        cursor: pointer;
        font-size: 25px;
        margin: 15px;
    }
    li {
        color: black;
        font-family: 'Ubuntu', sans-serif;
        font-weight: 500;
    }


`;

export const activeStyle =  {
   color: `${primaryRedColor}` as CSSProperties | undefined,
   "font-size": '30px',
}


