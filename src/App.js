import React from 'react';
import Header from './Header';
import Missing from './Missing';
import Footer from './Footer';
import Nav from './Nav';
import Home from './Home';
import Newpost from './Newpost';
import Postpage from './Postpage';
import Editpage from './Editpage';
import Register from './Register';
import { Route, Routes, useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import './App.css'

function App() {
  const navigate = useNavigate()
  const [Posts, setPosts] = useState([
    {
      id: 1,
      Title: "first post on the website",
      Body: "The body of the first post on the blog website. i don't know how to insert multiple fake lines."
    },
    {
      id: 2,
      Title: "second post on the website",
      Body: "The body of the second post on the blog website. i don't know how to insert multiple fake lines."
    },
    {
      id: 3,
      Title: "third post on the website",
      Body: "The body of the third post on the blog website. i don't know how to insert multiple fake lines."
    },
    {
      id: 4,
      Title: "fourth post on the website",
      Body: "The body of the fourth post on the blog website. i don't know how to insert multiple fake lines."
    },
  ])

  const [PostTitle, setPostTitle] = useState('')
  const [PostBody, setPostBody] = useState('')

  const CreateNewPost = async () => {
    const id = Posts.length ? Posts[Posts.length - 1].id + 1 : 1
    const newPost = {id, Title: PostTitle, Body: PostBody}
    setPosts([...Posts, newPost])
  }
  const EditPost = async (id, Title, Body) => {
    const update = Posts.map((Post) => Post.id == id ? {...Post , Title: Title, Body: Body} : Post)
    setPosts(update)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await CreateNewPost()
    setPostBody('')
    setPostTitle('')
  }
  const handleEdit = async (id, Title, Body, e) => {
    e.preventDefault()
    await EditPost(id, Title, Body)
    setPostBody('')
    setPostTitle('')
  }
  const DeletePost = async(id, e) => {
    id = +id
    console.log(id)
    const listPost = await Posts.filter((post) => post.id !== id)
    console.log(listPost)
    setPosts(listPost)
  }

  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={ <Home Posts={Posts}
                                        DeletePost={DeletePost}/>}/>
        <Route path='/register' element={ <Register Posts={Posts}
                                        DeletePost={DeletePost}/>}/>
        <Route path='/post/create' element={<Newpost 
                                          PostTitle={PostTitle} 
                                          setPostTitle={setPostTitle}
                                          PostBody={PostBody}
                                          setPostBody={setPostBody}
                                          handleSubmit={handleSubmit}/>}/>
        <Route path='/post/:id/edit' element={<Editpage
                                          Posts={Posts}
                                          PostTitle={PostTitle}
                                          PostBody={PostBody}
                                          handleEdit={handleEdit}
                                          setPostTitle={setPostTitle}
                                          setPostBody={setPostBody}/>}/>
        <Route path='/post/:id/view' element={<Postpage
                                          Posts={Posts}
                                          DeletePost={DeletePost}/>}/>
        <Route path='*' element={<Missing/>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
