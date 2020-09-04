import React, {useReducer} from 'react';
import './App.css';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import EffectHookCounterOne from './components/EffectHookCounterOne';
import EffectHookCounterTwo from './components/EffectHookCounterTwo';
import EffectHookCounterThree from './components/EffectHookCounterThree';
import EffectHookFour from './components/EffectHookFour';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import DataFetchingTwo from './components/DataFetchingTwo';
import ContextHook from './components/ContextHook';
import UseReducerCounterOne from './components/UseReducerCounterOne';
import UseReducerCounterTwo from './components/UseReducerCounterTwo';
import UseReducerCounterThree from './components/UseReducerCounterThree';
import ComponentAReducerWzContext from './components/ComponentAReducerWzContext';
import ComponentBReducerWzContext from './components/ComponentBReducerWzContext';
import ComponentCReducerWzContext from './components/ComponentCReducerWzContext';

export const userContext = React.createContext();
export const blogContext = React.createContext();

export const CountContext = React.useContext();
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
    <CountContext.Provider>
      <div className="App">
        Count - {count}
        <ComponentAReducerWzContext/>
        <ComponentBReducerWzContext/>
        <ComponentCReducerWzContext/>
      {/* 
        <UseReducerCounterThree/>
        <UseReducerCounterTwo/>
        <UseReducerCounterOne/>
        <userContext.Provider value={'temesghen'}>
          <blogContext.Provider value={'uandiprogramming.blogspot.com'}>
            <ContextHook />
          </blogContext.Provider>
        </userContext.Provider>
        <DataFetchingTwo/>
        <DataFetching/>
        <IntervalClassCounter/>
        <IntervalHookCounter/>
        <EffectHookFour/>
        <EffectHookCounterThree/>
        <EffectHookCounterTwo/>
        <EffectHookCounterOne/>
        <HookCounterFour/>
        <HookCounterThree/>
        <HookCounterTwo/>
      <HookCounter/> 
      */}
      </div>
    </CountContext.Provider>
  );
}

export default App;
