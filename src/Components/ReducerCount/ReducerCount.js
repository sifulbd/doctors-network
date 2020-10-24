import React, { useReducer } from 'react';

const initialCounter = {count: 0};

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment': return {count: state.count + 1}
        case 'decrement': return {count: state.count - 1}
        default: return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialCounter);
    return (
        <>
            <h2>This is counter {state.count}</h2>
            <button onClick={() => dispatch({type: 'increment'})}>increase</button>
            <button onClick={() => dispatch({type: 'decrement'})}>increase</button>
        </>
    )
}

export default Counter;