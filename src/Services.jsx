import React from 'react'
import styled from 'styled-components';
import { servicesapi } from './api/servicesapi';

const Services = () => {
    return (
        <React.Fragment>
            <Section>
                <div className="flex f-col">
                    <h2>Our Services</h2>
                    <div className="grid grid-two-column">
                        {
                            servicesapi.map((ele) => {
                                return (
                                    <div className='box flex'>
                            <div className="img">
                                <img src={ele.img} alt="" />
                            </div>
                            <div className="details flex f-col">
                                <h3>{ele.title}</h3>
                                <p>{ ele.desc}</p>
                            </div>
                        </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Section>
        </React.Fragment>
    );
}
const Section = styled.section`
margin: 2rem;
    transition: all .3s linear;

h2{
    text-align: center;
    margin-top: 5rem;
    margin-bottom: 5rem;
}
.img img{
    max-width: 250px;
}
.box{
    transition: all .3s linear;

    .img{
    transition: all .3s linear;
        overflow: hidden;
        width: 300px;
    }
    border-radius: 5px;
    overflow: hidden;
    background-color: #fff;
    gap: 1rem;
    margin: 2rem;
    border: 1px solid #99CC99;
    p{
        font-size: 1.3rem;
    }
    &:hover img{
        transform: scale(1.2);
    }
    &:hover {
        background-color: #CCE6CC;
    }
    &:hover h3{
        font-size: 3rem;
    }
}
`


export default Services
