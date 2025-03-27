import React from 'react'
import post from './postcard'
import {useContext} from 'react';
import DataContext from './Context/DataContext';

const Newpost = () => {
  const {PostTitle, setPostTitle, PostBody, setPostBody, handleSubmit} = useContext(DataContext)
  return (
    <form className="NewPost" onSubmit={handleSubmit}>
      <label htmlFor='Title'>Title:</label>
    <input type="text"
            id="Title"
            placeholder="Title"
            value={PostTitle}
            onChange={(e)=>setPostTitle(e.target.value)}></input>
    <label htmlFor='Body'>Body:</label>
    <input type="textarea"
            id="Body"
            value={PostBody}
            onChange={(e)=>setPostBody(e.target.value)}></input>
    <input type="submit"></input>
    </form>    
  )
}

export default Newpost