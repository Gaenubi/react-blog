import React from 'react'
import {Link} from 'react-router-dom'

const post = (props) => {
  return (
    <li key={props.postitem._id}> 
        <h1>{props.postitem.Title}</h1>
        <br></br>
        <p>{props.postitem.Body}</p>        
        <br></br>
        <button onClick={()=>props.DeletePost(props.postitem._id)}>Remove post</button>
        <br></br>
        <Link to={'/post/'+props.postitem._id+'/view'}>View</Link>
        <br></br>
    </li>
  )
}
export default post