

import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from './styles/Button';
const Herosection = (props) => {
    return (
        <Wrapper>
            <div className="container grid grid-two-column">
                <div className="section-hero-data">
                    <p className='para-less-important'>THIS IS ME</p>
                    <h1 className='name'>{props.name}</h1>
                    <p className='para-important'>{props.desc}</p>
                    <Button className="btn hire-me">
                        <NavLink to='/contact'>Hire Me</NavLink>
                    </Button>
                </div>
                <div className="section-hero-image">
                    <img src={props.image} alt="profile" />
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
margin-top: 5rem;
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
    &::after{
        position: absolute;
        content: "";
        height: 5px;
        width: 0%;
        background-color: ${({theme})=> theme.colors.helper};
        opacity: 0;
        transition: all .8s linear;
        top: 8rem;
        left: -2rem;
    }
    &:hover:before{
        transform: translateX(500px) rotate(45deg);
    }
    &:hover:after{
        opacity: 1;
        width: 80%;
    }
}
.container{
    display: flex;
    align-items: center;
    justify-content: center;
}
@media (max-width:1170px) {
    img{
    width: 600px;
}
}
@media (max-width:1020px) {
    img{
    width: 500px;
    }
.section-hero-data h1{
    font-size:5rem !important;
    width:50rem;
}
.grid{
    flex-direction: column-reverse;
}
}
@media (max-width:1020px) {
    .section-hero-data{
        width: 60rem;
    }
}
@media (max-width:620px) {
    .section-hero-data{
        width: 50rem;
    }
}
@media (max-width:500px) {
    margin-top: 1rem;
    img{
    width: 400px;
}
    .section-hero-data{
        width: 30rem;
        margin: 0;
        h1{
            display: inline-block !important;
            font-size: 3rem !important;
        }
        p{
            font-size: 1.3rem;
        }
    }
}
`

export default Herosection