import React from 'react';
import './App.css';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';

function App() {
  return (
    <div className="App">
      <HookCounterTwo/>
     {/* <HookCounter/> */}
    </div>
  );
}

export default App;
