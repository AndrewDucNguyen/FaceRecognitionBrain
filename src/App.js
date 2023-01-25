import React, {Component} from 'react';
import './App.css';
import ParticlesBg from 'particles-bg';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';

// //////////////////////////////////////////////////////////////////////////////////////////
// // In this section, we set the user authentication, app ID, model details, and the URL
// // of the image we want as an input. Change these strings to run your own example.
// /////////////////////////////////////////////////////////////////////////////////////////

// const USER_ID = 'YOUR_USER_ID_HERE';
// // Your PAT (Personal Access Token) can be found in the portal under Authentification
// const PAT = 'YOUR_PAT_HERE';
// const APP_ID = 'YOUR_APP_ID_HERE';
// // Change these to whatever model and image URL you want to use
// const MODEL_ID = 'general-image-recognition';
// const MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40';    
// const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';

// ///////////////////////////////////////////////////////////////////////////////////
// // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
// ///////////////////////////////////////////////////////////////////////////////////

// const raw = JSON.stringify({
//     "user_app_id": {
//         "user_id": USER_ID,
//         "app_id": APP_ID
//     },
//     "inputs": [
//         {
//             "data": {
//                 "image": {
//                     "url": IMAGE_URL
//                 }
//             }
//         }
//     ]
// });

// const requestOptions = {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Authorization': 'Key ' + PAT
//     },
//     body: raw
// };

// // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// // this will default to the latest version_id

// fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));


const app = new Clarifai.App({
  apiKey: process.env.CLARIFAI_API_KEY
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: ''
    }
  }

onInputChange = (e) => {
  console.log(e.target.value);
}

onSubmit = () => {
  this.setState({imageURL: this.state.input});
  
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
