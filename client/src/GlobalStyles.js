import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    html, body {
        margin: 0;
        padding-top: 30px;
        box-sizing: border-box;
        background-color: #F5E6D3; /* Color de fondo general */
    }
`;