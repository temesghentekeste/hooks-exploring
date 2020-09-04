import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
  }

const reducer = (state, action) => {
  switch(action.type){
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        error: '',
        post: action.payload
      }
    case 'FETCH_ERROR':
      return {
        loading: false,
        error: 'Something went wrong',
        post: {}
      }
    default: 
      return state
  }
}

function DataFetchingTwoUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
         .then(response => {
           dispatch({type: 'FETCH_SUCCESS', payload: response.data})
         }).catch( err => {
           dispatch({type: 'FETCH_ERROR'})
         })
  }, [])
  return (
    <div>
      {state.loading ? 'Loading' : state.post.title}
      {state.error ? state.error : null}
    </div>
  )
}

export default DataFetchingTwoUseReducer
