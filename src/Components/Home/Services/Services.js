import React from 'react';
import { Container, Row } from 'react-bootstrap';
import teath from './../../../assets/images/teath.png';
import teath2 from './../../../assets/images/teath2.png';
import teath3 from './../../../assets/images/teath3.png';
import Service from './Service';

const serviceData = [
    {
        title: 'Fluoride Treatment',
        img: teath,
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, odit.'
    },
    {
        title: 'Cavity Filling',
        img: teath2,
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, odit.'
    },
    {
        title: 'Teath Whitening',
        img: teath3,
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, odit.'
    },
]
const Services = () => {
    return (
        <section>
            <Container> 
                <Row>
                    {
                    serviceData.map((service, index) => <Service key={index} service={service}></Service> ) 
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Services;