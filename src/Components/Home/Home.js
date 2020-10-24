import React from 'react';
import Hero from './Hero/Hero';
import BusinessInfo from './BusinessInfo/BusinessInfo';
import Services from './Services/Services';
import Appoinment from './AppoinmentInfo/AppoinmentInfo';
import PatientManagement from '../PatientManagement/PatientManagement';

const Home = () => {
    return (
        <>
         <Hero></Hero>
         <PatientManagement></PatientManagement>
         <BusinessInfo></BusinessInfo>  
         <Services></Services>
         <Appoinment></Appoinment>
        </>
    );
};

export default Home;