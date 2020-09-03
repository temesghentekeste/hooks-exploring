import React from 'react';
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

export const userContext = React.createContext();
export const blogContext = React.createContext();
function App() {
  return (
    <div className="App">
      <userContext.Provider value={'temesghen'}>
        <blogContext.Provider value={'uandiprogramming.blogspot.com'}>
          <ContextHook />
        </blogContext.Provider>
      </userContext.Provider>
     {/* 
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
  );
}

export default App;
