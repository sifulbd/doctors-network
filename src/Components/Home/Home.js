import React from 'react';
import Hero from './Hero/Hero';
import BusinessInfo from './BusinessInfo/BusinessInfo';
import Services from './Services/Services';
import Appoinment from './AppoinmentInfo/AppoinmentInfo';

const Home = () => {
    return (
        <>
         <Hero></Hero>
         <BusinessInfo></BusinessInfo>  
         <Services></Services>
         <Appoinment></Appoinment>
        </>
    );
};

export default Home;