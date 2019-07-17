import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Lato", sans-serif;
    }

    a {
        text-decoration: none;
        color: black;
    }

    button {
        background-color: #fff;
        border: none;
        outline: 0;
    }

    button:hover {
        cursor: pointer;
    }

    li {
       list-style-type: none;
    }
`;

export default GlobalStyle;
