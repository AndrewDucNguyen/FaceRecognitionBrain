import React, {Component} from 'react';
import './App.css';
import ParticlesBg from 'particles-bg';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: ''
    }
  }

onInputChange = (e) => {
  this.setState({input: e.target.value});
}

onSubmit = () => {
  this.setState({imageURL: this.state.input});

  const raw = JSON.stringify({
      "user_app_id": {
          "user_id": process.env.REACT_APP_USER_ID,
          "app_id": process.env.REACT_APP_APP_ID
      },
      "inputs": [
          {
              "data": {
                  "image": {
                      "url": this.state.input
                  }
              }
          }
      ]
  });

  const requestOptions = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Authorization': 'Key ' + process.env.REACT_APP_PAT
      },
      body: raw
  };

  fetch("https://api.clarifai.com/v2/models/" + process.env.REACT_APP_MODEL_ID + "/outputs", requestOptions)
      .then(response => response.text())
      .then(result => console.log(JSON.parse(result).outputs[0].data.regions[0].region_info.bounding_box))
      .catch(error => console.log('error', error));
}

  render() {
    return (
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} color='#ffffff'/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onSubmit}/>
        <FaceRecognition imageUrl={this.state.imageURL}/>
      </div>
    )
  }
}

export default App;
