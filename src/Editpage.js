import React from 'react'
import {useState,  useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useContext} from 'react';
import DataContext from './Context/DataContext';

const Editpage = () => {

    const {Posts, PostTitle, PostBody, setPostTitle, setPostBody, handleEdit, DeletePost} = useContext(DataContext)
    const {id} = useParams()
    const [loading, setLoading] = useState(false)
    const [EditTitle, setEditTitle] = useState('')
    const [EditBody, setEditBody] = useState('')
    
    const fetchPost = async () => {
        const Post = await Posts.filter((post) => post._id == id)
        await setEditTitle(Post[0].Title)
        await setEditBody(Post[0].Body)
        setLoading(true)
    }
  
    useEffect(() => {
        fetchPost()
    }, [])

  return (
    loading && <>
        <form className="EditPost" onSubmit={(e) => handleEdit(id, EditTitle, EditBody, e)}>
    <label htmlFor='Title'>Title:</label>
  <input type="text"
          id="Title"
          value={EditTitle}
          onChange={(e)=>{setEditTitle(e.target.value)}}></input>
  <label htmlFor='Body'>Body:</label>
  <input type="textarea"
          id="Body"
          value={EditBody}
          onChange={(e)=>{setEditBody(e.target.value)}}></input>
  <input type="submit"></input>
  <button onClick={()=>DeletePost(id)}>Remove post</button>
  </form>
  </>
  )
}

export default Editpage