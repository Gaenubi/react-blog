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
import { Route, Routes } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { DataProvider } from './Context/DataContext';
import './App.css'

function App() {

  /*[{
    "_id": {
    "$oid": "1"
  },
    "Title": "first Title on db",
  	"Body": "Body of first Post on db"
  },
  {
    "_id": {
    "$oid": "2"
  },
    "Title": "second Title on db",
  	"Body": "Body of second Post on db"
  },
	{
    "_id": {
    "$oid": "3"
  },
    "Title": "third Title on db",
  	"Body": "Body of third Post on db"
  },
  {
    "_id": {
    "$oid": "4"
  },
    "Title": "fourth Title on db",
  	"Body": "Body of fourth Post on db"
  }
]*/

  return (
    <div className="App">
      <DataProvider>
        <Header></Header>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/register' element={ <Register />}/>
          <Route path='/post/create' element={<Newpost />}/>
          <Route path='/post/:id/edit' element={<Editpage />}/>
          <Route path='/post/:id/view' element={<Postpage />}/>
          <Route path='*' element={<Missing/>} />
        </Routes>
        <Footer></Footer>
      </DataProvider>
    </div>
  );
}

export default App;
