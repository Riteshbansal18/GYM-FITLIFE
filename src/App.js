import React, { useState } from 'react';
import Nav from './Components/Nav';
import About from './Components/About';
import Services from './Components/Services';
import Client from './Components/Client';
import Gallery from './Components/Gallery';
import TeamMembers from './Components/TeamMembers';
import Offer from './Components/Offer';
import Contact from './Components/Contact';
import BMI from './Components/BMI';
import Footer from './Components/Footer';
import Pricing from './Components/Pricing';
import HeroSection from './Components/HeroSection';
import Login from './Components/Login.jsx';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { teamMembers } from './Data/Data';

const MainApp = () => {
  const [nav, setNav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const location = useLocation();
  const onLoginSuccess = () => {
    setIsLoggedIn(true); 
  };

  window.addEventListener("scroll", () => {
    const scroll = document.documentElement.scrollTop;
    setNav(scroll > 405);
  });

  return (
    <div className="App">
      {location.pathname !== "/Login" && <Nav nav={nav} />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <About />
              <Services />
              <Client />
              <Gallery />
              <TeamMembers teamMembers={teamMembers} />
              <BMI />
              <Pricing />
              <Offer />
              <Contact />
              <Footer nav={nav} />
            </>
          }
        />
        <Route path="/Login" element={<Login onLoginSuccess={onLoginSuccess} />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <Router>
    <MainApp />
  </Router>
);

export default App;
