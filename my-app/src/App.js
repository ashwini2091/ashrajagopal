import './App.css';

import React from 'react'
import About from  './About';
import Projects from  './Projects';
import FunFacts from  './FunFacts';

import profile from './ash_rajagopal.jpg';


class App extends React.Component {
  render(){
    return (
      <div className="container">
        <header>
          <img className="profile" src={profile}/>
          <p className="intro">Hi! I'm Ashwini Rajagopal. I'm a software engineer who likes building solutions. 
            I currently live in Tempe, Arizona. </p>
        </header>
      <About/>
      <Projects />
      </div>

    );
  }
}

export default App;
