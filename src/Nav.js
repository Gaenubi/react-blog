import React from 'react'
import {Routes, Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className="Nav-bar">
      <Link to="/post/create"> Create Post</Link>
      <Link to="/"> Home</Link>
    </div>
  )
}

export default Nav