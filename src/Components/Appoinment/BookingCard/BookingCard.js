import React from 'react';
import { Col, Button } from 'react-bootstrap';
import Modal from 'react-modal';
import { useState } from 'react';
import BookingForm from '../BookingForm/BookingForm';

const BookingCard = ({booking, date}) => {
    Modal.setAppElement('#root');

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
       
    function closeModal(){
        setIsOpen(false);
    }

   return (
        <Col lg="4">
            <div className="card-body text-center">

                <h5 className="card-title text-brand">{booking.subject}</h5>
                <h6>{booking.visitingHour}</h6>
                <p>{booking.totalSpace} SPACES AVAILABLE </p>
                <Button onClick={openModal} className="btn btn-brand text-uppercase">Book Appointment</Button>
                <BookingForm modalIsOpen={modalIsOpen} appointmentOn={booking.subject} closeModal={closeModal} date={date}></BookingForm>
            </div>
        </Col>
    );
};

export default BookingCard;