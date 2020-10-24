import React from 'react';
import { Col } from 'react-bootstrap';

const infoCard = (props) => {
    const{title, des, background} = props.info;
    return (
        <Col lg="4" style={{backgroundColor: background}}>
              <h4>{title}</h4>  
              <p>{des}</p>    
        </Col>
    );
};

export default infoCard;