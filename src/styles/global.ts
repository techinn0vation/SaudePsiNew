import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,*::before,*::after {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
  }
  body {
    width: 100%;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    background: ${(props) => props.theme.colors.Branco};
    user-select: none;
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: transparent;
    /* overflow-x: hidden; */
  } 

`
