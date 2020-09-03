import React from 'react'
import {userContext, websiteContext} from '../App'
import ComponentA from './ComponentA'

function ContextHook() {
  return (
    <div>
      <ComponentA/>
    </div>
  )
}

export default ContextHook
