import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
         .then( response => {
           console.log(response)
           setPosts(response.data)
         }).catch(e => console.log(e))
  }, [])
  return (
    <div>
      <h1>All posts</h1>
      {
        posts.map( post => (<div key={post.id}>{post.title}</div>))
      }
    </div>
  )
}

export default DataFetching
