import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './styles/Button';

const Footer = () => {
    return (
        <Wrapper className='flex f-col'>
            <div className="contact-short flex">
                <h3>Ready to get started <br /> Talk with us</h3>
                <NavLink to="/contact">
                    <Button>Get Started</Button>
                </NavLink>
            </div>
            <footer>
                <div className="flex">
                    <div className="footer-about">
                        <p> <b>CapitalCrest</b>  <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem labore iste quae. Nemo, tempore iste?</p>
                    </div>
                    <div className="footer-subscribe">
                        <b>Subscribe for update</b>  <br />
                        <form action="" className='flex f-col'>
                            <input type="email" placeholder="Email" required />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>
                    <div className="footer-social">
                        <b>Follow Us</b>
                        <ul className='flex'>
                            <li><i className="fa-brands fa-instagram"></i></li>
                            <li><i className="fa-brands fa-telegram"></i></li>
                            <li><i className="fa-brands fa-facebook"></i></li>
                        </ul>
                    </div>
                    <div className="footer-callus">
                        <b>Call Us</b>
                        <ul className='flex f-col'>
                            <li>naveengaonkar014@gmail.com</li>
                            <li>+91 94814X93XX</li>
                        </ul>
                    </div>
                    <div className=""></div>
                </div>
                <hr />
                <p>© 2023 all rigths recived</p>
            </footer>
        </Wrapper>
    );
}
const Wrapper = styled.section`

    align-items: center;
    justify-content:center;
footer{
    background-color: blue;
    padding: 5rem 2rem;
    width: 100vw;
    text-align: center;
}
.contact-short{
    justify-content: space-between;
    background-color: white;
    border-radius: 5px;
    width: 50rem;
    padding: 1rem;
    margin: 2rem;
    align-items: center;
    transform: translateY(50px);
    border: 10px solid white;
}

.footer-about{
    width: 300px;
}
b{
    font-size: 2rem;
}

.footer-social .flex{
    gap: 2rem;
    i{
    font-size: 2rem;
    background-color: #fff;
    padding: 1rem;
    border-radius: 50%;
    transition: all .2s linear;
    cursor: pointer;
    &:hover{
        background-color: blue;
        border: 1px solid white;
        color: #fff;
    }
    }
}
input{
    width: auto;
}
.flex{
    gap: 4rem;
}
.footer-subscribe .flex{
    gap: 0;
}
.footer-callus .flex{
    gap: 1rem;
    font-size: 1.5rem;
}
@media (max-width:1100px){
    footer{
    width: 103vw;
    }
}
@media (max-width:860px){
    /*  */
    footer > div{
        display: grid;
        grid-template-columns: repeat(2,1fr);
    }
}
@media (max-width:560px){
    /*  */
    footer > div{
        display: grid;
        grid-template-columns: repeat(1,1fr);
    }
}
`
export default Footer
