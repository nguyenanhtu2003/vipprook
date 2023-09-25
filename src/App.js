import React from 'react';

import './App.css';
import Nav from './components/Nav';
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import About from './components/About';
import Maincar from './components/Maincar';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    <div className="App">

<Router>
     <Routes>
           {/* <Nav/> */}
           <Route path='/' element= { <Nav/> } />
    <Route path='/About' element= { <About/> } />
    <Route path='/Maincar' element= { <Maincar/> } />
    <Route path='/Login' element= { <Login/> } />
    <Route path='/Register' element= { <Register/> } />
   

     
     </Routes>
     </Router>
    </div>
  );
}

export default App;
