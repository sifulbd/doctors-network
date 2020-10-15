import React, { useState } from 'react';
import AppoinmentHero from './AppoinmentHero/AppoinmentHero';
import BookAppoinment from './BookAppoinment/BookAppoinment';

const Appoinment = () => {
    const [date, onChange] = useState(new Date());  
    return (
        <>
            <AppoinmentHero value={date} onChange={onChange}></AppoinmentHero>
            <BookAppoinment date={date} ></BookAppoinment>
        </>
    );
};

export default Appoinment;