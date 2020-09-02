import React, {useState, useEffect} from 'react'

function EffectHookCounterOne() {
  
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
 
  useEffect(() => {
    console.log('Document title updated');
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <br/>
      <input type="text" 
             value={name} 
             onChange = { e => setName(e.target.value)}/>
      <button onClick={()=>setCount(count + 1)}>{`Clicked ${count} times`}</button>
    </div>
  )
}

export default EffectHookCounterOne
