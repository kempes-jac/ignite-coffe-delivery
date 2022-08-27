import { createGlobalStyle } from 'styled-components'

import backgroundImage from '../assets/background.png'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${(props) => props.theme.background};
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: 100% 34rem;
    background-position: center 104px;
    
    -webkit-font-smoothing: antialiased;

    display: flex;

    flex-direction: column;
    align-content: center;
    /* width: 70em; */

  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  } 

`
