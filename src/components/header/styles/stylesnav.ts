import styled from 'styled-components';
import { colorWhite_Gray } from '../../../config/colorPalette';

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

export const Layout = styled.div`
    height: auto;
`;

export const activeStyle =  {
   color: `${colorWhite_Gray}`

}
