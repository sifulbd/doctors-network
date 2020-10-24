export const initialPatient = {
    patients: []
}

export const patientReducer = (state, action) =>  {
    switch(action.type) {
        case 'ADD_PATIENT':  
            const newPatient = {
                id: action.id,
                name: action.name
            }
            const allPatient = [...state.patients, newPatient];
            return { patients: allPatient };
        case 'REMOVE_PATIENT': 
            const remaining = state.patients.filter(pt => pt.id !== action.id)
            const newState = {patients : remaining} 
            return newState;
            default: return {state}
    }
}