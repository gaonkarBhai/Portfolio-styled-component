import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
const Navbar = () => {
    return (
        <React.Fragment>
            <NavBar>
                <NavLink to='/'> <img src="./images/logo.jpg" alt="logo" className='logo' /> </NavLink>
                <div className="menu-icon">
                    <ul className='nav-list'>
                        <li><NavLink className='navbar-link' to='/'>HOME</NavLink></li>
                        <li><NavLink className='navbar-link' to='/about'>ABOUT</NavLink></li>
                        <li><NavLink className='navbar-link' to='/service'>SERVICES</NavLink></li>
                        <li><NavLink className='navbar-link' to='/contact'>CONTACT</NavLink></li>
                    </ul>
                </div>
            </NavBar>
        </React.Fragment>
    );
} 
const NavBar = styled.nav`
padding: 0 4.5rem;
height: 5rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
.logo{
    height: auto;
    width: 30%;
}
.nav-list {
    display: flex;
    gap: 4rem;
    li{
        list-style: none;
        .navbar-link{
            text-decoration: none;
            color: ${({ theme }) => theme.colors.black};
            transition: all .3s liner;
            &:link,
            &:visited{
                text-decoration: none;
                font-weight: 600;
            }
        &:hover{
            color: ${({ theme }) => theme.colors.helper};
        }
    }
    }
    
}
`
export default Navbar
