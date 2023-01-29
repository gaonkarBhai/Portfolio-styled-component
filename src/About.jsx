import React from 'react'
import styled from 'styled-components';
import Herosection from './components/Herosection';

const About = () => {
    const data = {
        name: "Known More About Me",
        image: "images/about.jpg",
        desc:"As CapitalCrest, I am a highly experienced web developer with a proven track record of delivering high-quality and innovative websites. I specialize in using modern technologies to create responsive and dynamic websites that meet the needs of my clients."
    }
    return (
        <React.Fragment>
            <Herosection {...data} />
            <Para>
    Welcome to CapitalCrest, a web development company built on a foundation of experience, innovation, and excellence. Our founder and lead developer, CapitalCrest, has over a decade of experience in the web development industry and has built a reputation for delivering high-quality, user-friendly websites that exceed the expectations of our clients.<br/><br/>

At CapitalCrest, we specialize in creating responsive, interactive, and dynamic websites that are tailored to the specific needs of each of our clients. Our team of experts uses the latest technologies and best practices to ensure that every website we create is not only visually stunning, but also easy to navigate and use.<br/><br/><br/>

Our portfolio includes a wide range of projects, from simple brochure websites to complex e-commerce platforms and custom web applications. We work with businesses of all sizes, from start-ups to large corporations, and are dedicated to helping our clients achieve their online goals.<br/>

We pride ourselves on our excellent customer service, and always put the needs of our clients first. We believe in building long-term relationships with our clients, and strive to exceed their expectations at every step of the web development process.<br/>

Thank you for considering CapitalCrest for your web development needs. We look forward to working with you.



</Para>
        </React.Fragment>
    );
}
const Para = styled.section`
margin: 5rem;
font-size: 2rem;
`
export default About
