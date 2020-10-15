import React from 'react';
import { Container, Row } from 'react-bootstrap';
import InfoCard from './InfoCard';

const infoData = [
    {
        title: 'Opening Hours',
        des: 'We are open &days',
        icon: '',
        background: 'purple',

    },
    {
        title: 'Visit Our Location',
        des: 'Brokleyn, Ny, 1004, USA',
        icon: '',
        background: 'yellow'
    },
    {
        title: 'Call Now',
        des: '+9923243242',
        icon: '',
        background: 'green'
    }
]
const BusinessInfo = () => {
    return (
        <Container>
            <Row>
                {
                    infoData.map((info, index) => <InfoCard key={index} info={info}></InfoCard>) 
                }
            </Row>
        </Container>
    );
};

export default BusinessInfo;