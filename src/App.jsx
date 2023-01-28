import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';

import About from './About';
import Contact from './Contact';
import Home from './Home';
import Services from './Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { GlobalStyle } from './GlobalStyle';

const App = () => {
    const theme = {
        colors: {
            bg: "#e6e6e6",
            heading: "#000000",
            text: '#0a0a0a',
            helper: "#6c4396",
            black:"#000"
        },
        media: {
            tab: "998px",
            mobile: "768px"
        }
    };
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/service' element={<Services />} />
                </Routes>
                <Footer />
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App
