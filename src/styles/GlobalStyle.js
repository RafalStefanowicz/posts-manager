import { createGlobalStyle } from "styled-components";
import React from "react";
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        @import url("https://fonts.googleapis.com/css?family=Lato:400,700&display=swap");
        font-family: "Lato", sans-serif;
    }
    a {
        text-decoration: none;
        color: black;
    }
    button:hover {
        cursor: pointer;
    }
    li {
       list-style-type: none;
    }
`;

export default GlobalStyle;
