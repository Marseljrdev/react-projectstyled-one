import styled from "styled-components";

export const Header = styled.header`
    background-color: ${(props) => props.theme.background};
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.text};
    font-size: 50px;
`

export const Section = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: gray;
    height: 300px;

    svg{
        margin: 25px;
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3{
        margin-top: -15px;
    }

    span{
        margin-top: -12px;
    }
`

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

    p{
        text-align: left;
        max-width: 100%;
        margin: 10px;
    }

    img{
        max-width: 50%;
    }

`

export const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const RowReverse = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
`

export const Footer = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: gray;
    height: 300px;

    span{
        color: blue;
        cursor: pointer;
    }

    img{
        width: 40px;
        height: 40px;
        margin: 15px;
    }
`

