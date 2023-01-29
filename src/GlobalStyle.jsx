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
::-webkit-scrollbar{
  width: .5rem;
}
::-webkit-scrollbar-track{
   background-color: #fff;
}
::-webkit-scrollbar-thumb{
   background-color: blue;
  border-radius: 5px;
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
    color:${({ theme }) => theme.colors.heading};
}
h3{
    font-size: 2.2rem;
    font-weight: 400;
    color:${({ theme }) => theme.colors.heading};
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
.flex{
    display:flex;
    justify-content: center;
}
.f-col{
    flex-direction: column;
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
input,textarea{
            padding: 1rem;
            outline: none;
            border: 1px solid blue;
            margin: 1rem 0;
            width: 500px;
            border-radius: 4px;
            resize: none;
        }
        input[type="submit"]{
            border-radius: 0px;
            background-color: ${({ theme }) => theme.colors.helper};
            border: none;
            cursor: pointer;
            transition: all .2s linear;
            &:hover{
                transform: scale(.97);
                background-color: #fff;
                color:  ${({ theme }) => theme.colors.helper};
                border: 1px solid  ${({ theme }) => theme.colors.helper};
            }
        }
`;