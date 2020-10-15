import React from 'react';
import { Col } from 'react-bootstrap';

const Service = (props) => {
    const{title, img, des} = props.service;
    return (
        <Col lg="4">
            <div className="service_inner">
                <img src={img} alt="" className="img-fluid"/>
                <h4>{title}</h4>
                <p>{des}</p>
            </div>
        </Col>
    );
};

export default Service;