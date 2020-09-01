import React from 'react';
import './App.css';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';

function App() {
  return (
    <div className="App">
      <HookCounterFour/>
     {/* 
      <HookCounterThree/>
      <HookCounterTwo/>
     <HookCounter/> 
     */}
    </div>
  );
}

export default App;
