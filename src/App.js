import React from 'react';
import './App.css';
import ParticlesBg from 'particles-bg';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';


function App() {
  return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} color='#ffffff'/>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      <FaceRecognition />
    </div>
  );
}

export default App;
