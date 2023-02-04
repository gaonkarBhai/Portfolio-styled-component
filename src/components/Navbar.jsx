import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
const Navbar = () => {
    const [openMenu,setOpenMenu] = useState(false)
    return (
        <React.Fragment>
            <NavBar>
                <NavLink to='/'> <img src="./images/logo.jpg" alt="logo" className='logo' /> </NavLink>
                <div className={(openMenu ? "menu-icon active" :"menu-icon")}>
                    <ul className='nav-list'>
                        <li><NavLink className='navbar-link' to='/'>HOME</NavLink></li>
                        <li><NavLink className='navbar-link' to='/about'>ABOUT</NavLink></li>
                        <li><NavLink className='navbar-link' to='/service'>SERVICES</NavLink></li>
                        <li><NavLink className='navbar-link' to='/contact'>CONTACT</NavLink></li>
                    </ul>
                    
                        <div className="mobile-navbar-btn">
                        <i onClick={()=>{setOpenMenu(true)}} className="fa-solid fa-bars open-menu"  name='open-menu'></i>
                        <i onClick={()=>{setOpenMenu(false)}} className="fa-solid fa-xmark close-menu" name='close-menu'></i>
                        </div>
                    
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
.mobile-navbar-btn .open-menu{
    display: none;
}
.mobile-navbar-btn .close-menu{
    display: none;
}
@media (max-width:1170px) {
    width: 102vw;
}
@media (max-width:740px) {
    .logo{
    width: 60%;
}
}
@media (max-width:620px) {
    .nav-list{
        display: none;
    }
    .mobile-navbar-btn .open-menu{
        display: inline-block;
        font-size: 3rem;
    }
    .logo{
    height: auto;
    width: 40%;
}

/* .active .mobile-navbar-btn{
        display: none;
    } */
.active .mobile-navbar-btn .close-menu{
    display: inline-block ;
    font-size: 4rem;
    position: relative;
    z-index: 999;
    top: 1rem;
}
.nav-list{
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        /* display: flex; */
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        .navbar-link{
            font-size: 3rem;
        }
    }
.active .nav-list{
    z-index: 100;
    display: flex;
    font-size: 6rem;
}
}


`
export default Navbar
