import React, {useReducer} from 'react';
import './App.css';
import ComponentAReducerWzContext from './components/ComponentAReducerWzContext';
import ComponentBReducerWzContext from './components/ComponentBReducerWzContext';
import ComponentCReducerWzContext from './components/ComponentCReducerWzContext';
import DataFetchingOne from './components/DataFetchingOne';


export const CountContext = React.createContext();
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

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
    //   <div className="App">
    //     Count - {count}
    //     <ComponentAReducerWzContext/>
    //     <ComponentBReducerWzContext/>
    //     <ComponentCReducerWzContext/>
    //   </div>
    // </CountContext.Provider>
    <div className="App"  >
      <DataFetchingOne/>
    </div>
  );
}

export default App;
