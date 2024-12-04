import React from 'react';
import './App.css';
import Home from './Home/home';
import Education from './Education/education';
import Portfoliooo from './Portfoliooo/portfoliooo';
import Contact from './Contact/contact';

import Navbar from './Navbar/navbar';
import Skills from './Skills/skill';




function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Education/>
      <Skills/>
      <Portfoliooo/>
      
      <Contact/>
    </>
    
  )
}

export default App;
