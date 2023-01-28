import { createGlobalStyle, styled } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
}
html{
    font-size: 62.5%;
    overflow-x: hidden;
}
h1{
    font-size: 6rem;
    font-weight: 900;
    color:${({ theme }) => theme.colors.heading};
    font-family: 'Bowlby One SC', cursive;
}
h2{
    font-size: 4.4rem;
    font-weight: 600;
    color:${({theme}) => theme.colors.heading};
}
h3{
    font-size: 2.2rem;
    font-weight: 400;
    color:${({theme}) => theme.colors.heading};
}
p{
    font-size: 1.6rem;
    font-weight: 350;
    color:${({ theme }) => theme.colors.text};
    margin-top: 1rem;
}
a{
    text-decoration: none;
    font-size: 1.6rem;
}
li{
    list-style: none;
}

.para-less-important{
        color: #b7b7b7;
        font-size: 2rem;
    }
.para-important{
        font-size: 2rem;
        
    }
.grid{
    display:grid;
}
.grid-two-column{
        grid-template-columns: repeat(2,1fr);
    }
`;