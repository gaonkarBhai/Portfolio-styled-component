import styled from "styled-components";

export const Button = styled.button`
max-width: auto;
text-decoration: none;
background-color:  ${({ theme }) => theme.colors.helper};
padding: 1rem 1.5rem;
a{
    color:white;
    font-weight: 500;
}
border: none;
text-align: center;
font-weight: 500;
transition: all .1s linear;
margin-top: 2rem;
&:hover,&:active{
color: #38224d;
transform: scale(0.97);
border-radius: .3rem;
}
`