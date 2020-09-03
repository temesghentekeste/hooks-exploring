import React, {useReducer} from 'react';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
        return initialState;
    default:
      return state;
  }
}
function UseReducerCounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState)
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>Count I: {count}</h1>
      <h1>Count II: {countTwo}</h1>
      <button onClick= {()=>{dispatch('increment')}}>Increment</button>
      <button onClick={()=> dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>

      <button onClick= {()=>{dispatchTwo('increment')}}>Increment II</button>
      <button onClick={()=> dispatchTwo('decrement')}>Decrement II</button>
      <button onClick={() => dispatchTwo('reset')}>Reset II</button>
    </div>
  )
}

export default UseReducerCounterThree
