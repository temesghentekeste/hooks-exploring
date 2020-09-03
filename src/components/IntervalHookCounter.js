import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {

  const [count, setCount] = useState(0)
  
  useEffect(()=>{
    const interval = setInterval(tick, 1000)

    return clearInterval(tick)
  }, []) //we can pass a value to the dependcy if we use the first approach
  
  //this works passing a value to the dependency array
  // const tick = () => {
  //   setCount(count + 1)
  // }


  //without passing a value to the dependency
  const tick = () => {
    setCount(count => count + 1)
  }

  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default IntervalHookCounter
