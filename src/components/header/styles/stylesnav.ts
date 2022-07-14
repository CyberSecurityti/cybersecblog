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
        font-family: 'Ubuntu', sans-serif;
        font-weight: 500;
    }
    li:hover {
        border-bottom: 4px solid ${primaryRedColor};
    }

`