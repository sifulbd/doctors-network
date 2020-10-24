import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import heroImng from "../../../assets/images/hero.png";
import PatientManagement from '../../PatientManagement/PatientManagement';

const Hero = () => {
    return (
        <Container>
            <Row className="d-flex align-items-center">
                <Col lg="6">
                    <div className="hero-inner">
                        <h2> Your New Smile 
                        <br></br>
                        Starts Here </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Placeat, labore! Placeat nobis quod eos repellat?</p>
                        <Button>Get Appoinment</Button>
                    </div>
                </Col>
                <Col lg="6">
                    <img src={heroImng} className="img-fluid" alt=""/>
                </Col>
            </Row>            
        </Container>
    );
};


export default Hero;