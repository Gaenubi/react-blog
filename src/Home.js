import React from 'react';
import Postcard from './postcard';
import {useContext} from 'react';
import DataContext from './Context/DataContext';

const Home = () => {
  const { Posts, DeletePost, isLoading } = useContext(DataContext)
  console.log(Posts)

  return (
    <> {isLoading && Posts != [] && <h1> Posts are loading </h1> } 

    {!isLoading && <>
      <ul>
      {Posts.map((postitem) => (
          <Postcard
            postitem={postitem}
            DeletePost={DeletePost}
          />
        ))
      }        
      </ul>
   </>}</>
  )  
}

export default Home