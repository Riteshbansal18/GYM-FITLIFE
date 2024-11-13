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
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const location = useLocation();

  // Function to handle login success
  const onLoginSuccess = () => {
    setIsLoggedIn(true); // Set the user as logged in
  };

  window.addEventListener("scroll", () => {
    const scroll = document.documentElement.scrollTop;
    setNav(scroll > 405);
  });

  return (
    <div className="App">
      {/* Show Nav only if not on the Login page */}
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
        {/* Pass onLoginSuccess to Login component */}
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
