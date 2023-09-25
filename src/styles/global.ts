import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 100%;
    }

    body {
        background-color: ${(props) => props.theme.lightGray};
        color: ${(props) => props.theme.textGray};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 0.8125rem Inter, sans-serif;
    }
`
