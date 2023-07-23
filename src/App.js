import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"

import LandingPage from './Components/LandingPage';
import About from './Components/About';


import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/blackspace' element={<LandingPage/>} />
        <Route path='/ejercicios' element={<LandingPage/>} />

      </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
