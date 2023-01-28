import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from './styles/Button';

const Herosection = () => {
    return (
        <Wrapper>
            <div className="container grid grid-two-column">
                <div className="section-hero-data">
                    <p className='para-less-important'>THIS IS ME</p>
                    <h1 className='name'>CapitalCrest</h1>
                    <p className='para-important'>As CapitalCrest, I am a highly experienced web developer with a proven track record of delivering high-quality and innovative websites. I specialize in using modern technologies to create responsive and dynamic websites that meet the needs of my clients.</p>
                    <Button className="btn hire-me">
                        <NavLink to='/contact'>Hire Me</NavLink>
                    </Button>
                </div>
                <div className="section-hero-image">
                    <img src="images/hero.png" alt="profile" />
                </div>

            </div>
        </Wrapper>
    );
}
const Wrapper = styled.section`
.section-hero-data{
    width: 70rem;
    margin-left: 5rem;
}
img{
    width: 700px;
}
.name{
    position: relative;
    overflow: hidden;
    &::before{
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        background-color: #fff;
        opacity: .7;
        transition: all .8s linear;
        transform: translateX(-500px) rotate(45deg);
    }
    &:hover:before{
        transform: translateX(500px) rotate(45deg);
    }
}
.container{
    display: flex;
    align-items: center;
    justify-content: center;
}
`

export default Herosection