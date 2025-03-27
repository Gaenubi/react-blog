import {createContext, useState, useEffect} from 'react';
import {  useNavigate } from 'react-router-dom';
import { getAllPosts, createPost, editPost, deletePost } from '../ApiRequests'

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

      const navigate = useNavigate()
      const [Posts, setPosts] =  useState([])   
      const [isLoading, setIsLoading] = useState(true) 
      const [PostTitle, setPostTitle] = useState('')
      const [PostBody, setPostBody] = useState('')

      const getPosts = async () => {
        const response = await getAllPosts();
        console.log(response);
        setPosts(response);
        setIsLoading(false);
      }

      useEffect(() => {
          getPosts();
      }, [])

      const CreateNewPost = async () => {
        const id = Posts.length ? Posts[Posts.length - 1]._id + 1 : 1
        const newPost = {_id: id, Title: PostTitle, Body: PostBody}
        setPosts([...Posts, newPost])

        createPost(PostTitle, PostBody);
      }
      
      const EditPost = async (id, Title, Body) => {
        const update = Posts.map((Post) => Post._id == id ? {...Post , Title: Title, Body: Body} : Post)
        setPosts(update)

        editPost(id, Title, Body)
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
        const listPost = await Posts.filter((post) => post._id !== id)
        console.log(listPost)
        setPosts(listPost)

        deletePost(id)
      }
    
    
    return (
        <DataContext.Provider value={{
            Posts, setPosts,
            PostTitle, PostBody, setPostTitle, setPostBody, handleSubmit, handleEdit, DeletePost,
            isLoading, setIsLoading
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;