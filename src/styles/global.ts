import { createGlobalStyle } from 'styled-components'
import { devices } from './mixins'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 100%;

        @media ${devices.tablet} {
            font-size: 90%;
        }

        @media ${devices.phone} {
            font-size: 70%;
        }

        @media ${devices.desktop} {
            font-size: 95%;
        }
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
