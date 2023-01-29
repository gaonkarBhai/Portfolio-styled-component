import React from 'react'

import Herosection from './components/Herosection'
import Contact from './Contact';
import Services from './Services';
const Home = () => {
    const data = {
        name: "CapitalCrest",
        image: "images/hero.png",
        desc:"As CapitalCrest, I am a highly experienced web developer with a proven track record of delivering high-quality and innovative websites. I specialize in using modern technologies to create responsive and dynamic websites that meet the needs of my clients."
    }
    return (
        <React.Fragment>
            <Herosection {...data} />
            <Services />
            <Contact/>
        </React.Fragment>
    );
}

export default Home
