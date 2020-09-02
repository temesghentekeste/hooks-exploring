import React, {useState, useEffect} from 'react';
import EffectHookCounterThree from './EffectHookCounterThree'

function EffectHookCounterFour() {
  
  const [display, setDisplay] = useState(true)

  return (
    <div>
      <br/>
      <button onClick={()=>setDisplay(!display)}>Toggle</button>
      { display && <EffectHookCounterThree/>}
    </div>
  )
}

export default EffectHookCounterFour
