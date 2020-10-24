import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import appn from './../../../assets/images/appn.png';

const Appoinment = () => {
    return (
        <Container>
            <Row>
                <Col lg="6">
                    <img src={appn} alt="" className="img-fluid"/>
                </Col>
                <Col lg="6">
                    <div className="appoinemntInner">
                        <h3>Exceptional Denta care on your team </h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio dolores vel sunt ullam voluptatem, 
                        nihil optio repudiandae eveniet saepe. Exercitationem accusantium saepe 
                        sint omnis perferendis quia necessitatibus dolor, esse ut.</p>
                        <Button>Read More</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Appoinment;