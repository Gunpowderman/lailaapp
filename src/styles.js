import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url(‘https://fonts.googleapis.com/css2?family=Tajawal');

html, body, * {
    font-family: 'Tajawal', sans-serif;
    margin: 0;
    padding: 0;
}
body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color}
}
`;

export default GlobalStyle;
