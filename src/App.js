import {React, Component} from 'react';
import './App.css';
import ParticlesBg from 'particles-bg';
import {ClarifaiStub, grpc} from 'clarifai-nodejs-grpc';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';

// Construct the stub object for accessing all the Clarifai API functionality
const stub = ClarifaiStub.grpc();

////////////////////////////////////////////////////////////////////////////////////////////
// This is where you set up the Metadata object that's used to authenticate. 
// This authorization will be used by every Clarifai API call.
// Change the following authorization key to your own credentials
// Example: metadata.set("authorization", "Key " + "a123457612345678");
////////////////////////////////////////////////////////////////////////////////////////////

const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + "YOUR_CLARIFAI_PAT_HERE");
// Or, if you were to use an API Key:
// metadata.set("authorization", "Key " + "YOUR_CLARIFAI_API_KEY_HERE");
// Yes, the word 'Key' appears in addition to the alphanumeric PAT or API Key

/////////////////////////////////////////////////////////////////////////////////////////////
// A UserAppIDSet object is needed when using a PAT. It contains two pieces of information: 
// user_id (your user id) and app_id (app id that contains the model of interest). 
// Both of them are specified as string values.
/////////////////////////////////////////////////////////////////////////////////////////////

user_app_id: {
    "\user_id": "YOUR_USER_ID_HERE",
    "app_id": "YOUR_APPLICATION_ID_HERE"
}

//////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, model details, and the URL
// of the image we want as an input. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to whatever model and image URL you want to use
const MODEL_ID = 'general-image-recognition';
const MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40';    
const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": IMAGE_URL
                }
            }
        }
    ]
});

const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
    },
    body: raw
};
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
  fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
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
