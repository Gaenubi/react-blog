import React from 'react'
import Postcard from './postcard'

const Home = (props) => {
  return (
    (
      <ul>
        {props.Posts.map((postitem) => (
            <Postcard
              postitem={postitem}
              DeletePost={props.DeletePost}
            />
        ))}        
      </ul>
  ))
  
}

export default Home