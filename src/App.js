import {React, Component} from 'react';
import './App.css';
import ParticlesBg from 'particles-bg';
import {ClarifaiStub, grpc} from 'clarifai-nodejs-grpc';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';

const app = new Clarifai.App({
  apiKey: 'e244becc576241ecaf5169a4c9c444fb'
});

const stub = ClarifaiStub.grpc();

const metadata = new grpc.Metadata();
metadata.set("authorization", "e244becc576241ecaf5169a4c9c444fb");

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

onInputChange = (e) => {
  console.log(e.target.value);
}

onSubmit = () => {
  
}

  render() {
    return (
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} color='#ffffff'/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onSubmit}/>
        <FaceRecognition />
      </div>
    )
  }
}

export default App;
