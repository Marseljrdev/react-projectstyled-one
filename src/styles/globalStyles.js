import { createGlobalStyle } from 'styled-components';

export default  createGlobalStyle`
    * {
        box-sizing: border-box;
        outline: 0;
        transition: 0.1s;
    } 

    body {
        background-color: ${(props) => props.theme.background};
        color: ${props => props.theme.text};        
    }
    h1 {
        color: ${props => props.theme.titles};        
    }
    .accent {
        background-color: ${props => props.theme.accent};
        color: ${props => props.theme.text};
        height: 30px;
    }
`

