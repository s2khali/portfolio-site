import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'QuickSsand', sans-serif;
  }

  html, body {
    overflow-x: hidden;
    background: ${(props) => props.theme.colors.mainDark}
`;

export default GlobalStyle;
