import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingTwo() {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(id)

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(response => {
          console.log(response.data)
          setPost(response.data)
        }).catch( err => console.log(err))
  }, [idFromButtonClick])
  
  const getPost = () => {
    setIdFromButtonClick(id)
  }

  return (
    <div>
      <h1>Get Post By Id</h1>
      <input 
        type="text" 
        value={id} 
        onChange={(e)=>setId(e.target.value)}
      />
      <button onClick={getPost}>Get Post</button>
      {
        <div key={post.id}>{post.title}</div>
      }
    </div>
  )
}

export default DataFetchingTwo
