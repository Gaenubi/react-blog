import React from 'react'
import {useState,  useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {useContext} from 'react';
import DataContext from './Context/DataContext';


const Postpage = () => {
  const {Posts, DeletePost} = useContext(DataContext)
  const {id} = useParams()
  const [loading, setLoading] = useState(false)
  const [Deleted, setDeleted] = useState(false)
  const [PostTitle, setPostTitle] = useState('')
  const [PostBody, setPostBody] = useState('')
      
  const fetchPost = async () => {
      const Post = await Posts.filter((post) => post._id == id)
      await setPostTitle(Post[0].Title)
      await setPostBody(Post[0].Body)
      setLoading(true)
  }
    
  useEffect(() => {
      fetchPost()
  }, [])

  return (
    <>
    {loading && Deleted && <h1>Post Deleted!</h1>}

    {loading && !Deleted &&
    <>
    <h1>{PostTitle}</h1>
    <br></br>
    <p>{PostBody + PostBody + PostBody}
    </p>
    <br></br>
    <button onClick={()=>{DeletePost(id)
                          setDeleted(true)}}>Remove post</button>
    <br></br>
    <Link to={'/post/'+id+'/edit'}>Edit</Link>
    </>
    }
    </>
  )
}

export default Postpage