import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from "./Home";
import Service from './Service'
import About from './About';
function App() {
  let Component
 // eslint-disable-next-line default-case
 switch (window.location.pathname)
 {
  case "/":
    Component = Home;
    break;
  case "/Service":
   Component = Service;
    break;
  case "/About":
    Component = About;
    break;
 }
  return (
    <div >
     <Navbar />
     <div className="container"><Component /></div>
     
    </div>
  );
}

export default App;
