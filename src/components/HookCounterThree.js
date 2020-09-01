import React, {useState} from 'react'

function HookCounterThree() {
  const [name, setName] = useState({firstName: '', lastName: ''});
  return (
    <div>
      <form>
        <input 
          value={name.firstName} 
          onChange={e => setName({...name, firstName: e.target.value})} placeholder="First name"
        />
        
        <input 
          value={name.lastName} 
          onChange={e => setName({...name, lastName: e.target.value})} placeholder="Last name"
        />
        <h2>First name: {name.firstName}</h2>
        <h2>Last name: {name.lastName}</h2>
        <h1>Full name: {`${name.firstName} ${name.lastName}`}</h1>
      </form>
    </div>
  )
}

export default HookCounterThree
