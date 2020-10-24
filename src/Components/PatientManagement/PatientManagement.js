import React, { useReducer, useRef } from "react";
import { Form } from "react-bootstrap";
import { initialPatient, patientReducer } from "./PatientReducer";

export default function PatientManagement() {
    const [state, dispatch] = useReducer(patientReducer, initialPatient);
    const nameRef = useRef();

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({
            type: 'ADD_PATIENT',
            name: nameRef.current.value,
            id: state.patients.length + 1
        })
        nameRef.current.value = ' '

    }
  return (
    <div className="">
      <h1>Patient Management {state.patients.length ? state.patients.length : 0}</h1>
      <ul>
          { state.patients ? state.patients.map( pt => <li key={pt.id} onClick={ () => dispatch({
             type: 'REMOVE_PATIENT', 
             id: pt.id
          })}>{pt.name}</li>) : ''}
      </ul>
      <Form onSubmit={handleSubmit}>
          <input ref={nameRef}></input>
      </Form>
    </div>
  );
}