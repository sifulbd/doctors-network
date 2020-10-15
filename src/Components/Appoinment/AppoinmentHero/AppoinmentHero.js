import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import apHero from './../../../assets/images/hero.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppoinmentHero = ({date, onChange}) => {  
    console.log(date)
    return (
        <Container>
            <Row>
                <Col lg="6">
                    <Calendar
                        onChange={onChange}
                        value={date}
                    />
                </Col>
                <Col lg="6">
                    <img src={apHero} alt="" className='img-fluid'/>
                </Col>
            </Row>
        </Container>
    );
};

export default AppoinmentHero;