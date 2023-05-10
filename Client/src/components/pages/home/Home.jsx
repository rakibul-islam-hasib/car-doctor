import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import ContactHero from './ContactHero';

const Home = () => {
    return (
        <div>
            <Banner /> 
            <About /> 
            <Services />
            <ContactHero /> 
        </div>
    );
};

export default Home;