import React from "react"
import Landing from '../Components/Landing';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


function Home() {
  return (
    <div>
      <Landing />
    </div>
  )
};

export default Home;