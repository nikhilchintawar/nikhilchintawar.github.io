import React, { lazy, Suspense } from 'react';


import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Spinner from './components/spinner/Spinner';
import { Route, Switch } from 'react-router-dom';
import Project from './components/projects/Project';


const AboutMe = lazy(() => import('./components/about-me/AboutMe'));
const Background = lazy(() => import('./components/background/Background'));
const ParallaxEffect = lazy(() => import('./parallax/ParallaxEffect'));
const Currently = lazy(() => import('./components/currently/Currently'));
const Experience = lazy(() => import('./components/experience/Experience'));
const Contact = lazy(() => import('./components/contact/Contact'));


function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/'>
        <Header />
          <Suspense fallback={<Spinner />}>
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

          </Suspense>
        </Route>

        <Route path="/projects" component={Project} />
      </Switch>
    </div>
  );
}

export default App;
