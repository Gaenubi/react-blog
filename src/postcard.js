import React from 'react'
import {Link} from 'react-router-dom'

const post = (props) => {
  return (
    <li key={props.postitem.id}> 
        <h1>{props.postitem.Title}</h1>
        <br></br>
        <p>{props.postitem.Body}</p>        
        <br></br>
        <button onClick={()=>props.DeletePost(props.postitem.id)}>Remove post</button>
        <br></br>
        <Link to={'/post/'+props.postitem.id+'/view'}>View</Link>
        <br></br>
    </li>
  )
}
export default post