import React, {Component} from 'react';
import './App.css';
import ParticlesBg from 'particles-bg';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: '',
      box: {},
      route: 'Signin'
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = JSON.parse(data).outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
     leftCol: clarifaiFace.left_col * width,
     topRow: clarifaiFace.top_row * height,
     rightCol: width - (clarifaiFace.right_col * width),
     bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
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
      .then(result => this.displayFaceBox(this.calculateFaceLocation(result)))
      .catch(error => console.log('error', error));
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    return (
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} color='#ffffff'/>
        <Navigation onRouteChange={this.onRouteChange}/>
        {this.state.route === 'Signin' 
        ? <Signin onRouteChange={this.onRouteChange}/> 
        : <div> <Logo/>
          <Rank />
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onSubmit}/>
          <FaceRecognition box={this.state.box} imageUrl={this.state.imageURL}/>
        </div>
        }
      </div>
    )
  }
}

export default App;
