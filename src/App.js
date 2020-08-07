import React from 'react';


import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import AboutMe from './components/about-me/AboutMe';
import Background from './components/background/Background';
import ParallaxEffect from './parallax/ParallaxEffect';
import Currently from './components/currently/Currently';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <Home id="homeLink" />

      <ParallaxEffect>
        <AboutMe id="aboutMeLink" />
      </ParallaxEffect>

      <Background id="backgroundLink" />
      
      <ParallaxEffect>
        <Currently />
      </ParallaxEffect>

      <Experience id="experienceLink" />

      <ParallaxEffect>
        <Contact id="contactLink" />
      </ParallaxEffect>
      
    </div>
  );
}

export default App;
