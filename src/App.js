import React from 'react';
import './App.css';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import EffectHookCounterOne from './EffectHookCounterOne';

function App() {
  return (
    <div className="App">
      <EffectHookCounterOne/>
     {/* 
      <HookCounterFour/>
      <HookCounterThree/>
      <HookCounterTwo/>
     <HookCounter/> 
     */}
    </div>
  );
}

export default App;
