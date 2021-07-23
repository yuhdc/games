import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
        transition: all ease 0.7s;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
            background: white;
        }
        scroll-behavior: smooth;
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        /* background: rgba(54,0,51,0.9);  
        background: -webkit-linear-gradient(0.75turn, rgba(0, 0, 10,0.9), 80%, rgba(54,0,51,0.9));  
        background: linear-gradient(to top left, rgba(0, 0, 10,0.9), 50%, rgba(54,0,51,1));  */
    h2{
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #333;
    }
    h3{
        font-size: 1.1rem;
        color: #333;
        padding: 1.5rem 0rem;
        font-weight: lighter;
    }
    p{
        font-size: 0.9rem;
        line-height: 200%;
        color: #696969;
        font-weight: bold;
    }
    a{
        text-decoration: none;
        color: #333;
        cursor: pointer;
    }
    img{
        display: block;
    }
    input{
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
    }
}
`;

export default GlobalStyles;
