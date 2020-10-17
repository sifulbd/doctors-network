import React from 'react';
import Modal from 'react-modal';

const customStyles = { 
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

const BookingForm = ({modalIsOpen, appointmentOn, closeModal, date}) => {    
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

          <h2>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>{date}</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
        </div>
    );
};

export default BookingForm;