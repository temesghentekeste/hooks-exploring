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
function UseReducerCounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick= {()=>{dispatch('increment')}}>Increment</button>
      <button onClick={()=> dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default UseReducerCounterOne
