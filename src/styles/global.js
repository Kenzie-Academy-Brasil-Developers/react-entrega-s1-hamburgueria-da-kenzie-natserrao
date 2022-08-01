import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        
    }
    :root{
        --DarkGreen: #27AE60;
        --LightGreen: #93D7AF;
        --LightRed:  #EB5757;
        --Grey100: #333333;
        --Grey50: ##828282;
        --Grey20: #E0E0E0;
        --Grey0: #F5F5F5;
        --White: #FFFF;

        --font-family: "Inter", sans-serif;
    }

    button{
        cursor:pointer;
        border: 0;
        background: transparent;
    }
    ul, li, ol{
        list-style: none;
        margin:0;
    }
    section, div, aside, header, nav, footer{
        width: 100vw;
        display:flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    img{
        max-width: 100%;
    }
    body{
        width: 100vw;
        height: 100%;
        margin-bottom: 2rem;
        
@media (min-width: 1281px) {
    overflow-x: hidden;
  }
    }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 1.5rem;
  gap: 1.5rem;

  @media (min-width: 500px) {
    flex-direction: row;
    gap: 3rem;
  }
`;
