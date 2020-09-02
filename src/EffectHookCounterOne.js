import React, {useState, useEffect} from 'react'

function EffectHookCounterOne() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <br/>
      <button onClick={()=>setCount(count + 1)}>{`Clicked ${count} times`}</button>
    </div>
  )
}

export default EffectHookCounterOne
