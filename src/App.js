import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 400,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  AOS.refresh();
  }, []);

  return (
      <Router>   
    <div className="App">
    <Nav />  
    <Routes>
      <Route path="/" element={<Home />}></Route>  
       <Route path="/Contact" element={<Contact />}></Route>     
       <Route path="/About" element={<About />}></Route>     
      </Routes>
    <Footer />
    </div>   
    </Router> 
  );
}

export default App;
