import React, {useContext} from 'react'
import {userContext, blogContext} from '../App'

function ComponentA() {
  const user = useContext(userContext)
  const blog = useContext(blogContext)
  return (
    <div>
      <h1>{user}</h1>
      <a href={`http://www.${blog}`} target="blank" >{blog}</a>
    </div>
  )
}

export default ComponentA
