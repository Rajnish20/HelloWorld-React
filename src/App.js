
import './App.css';
import React from 'react';
import image from './assets/anime.jpg'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      title:'Hello There ! From BridgeLabz',
      username:''
    }
  }
  onClick = ($event) =>{
    window.open('https://unsplash.com/s/photos/anime',"_blank")
  }

  onNameChange = (event) => {
    console.log("Value is ", event.target.value);
    this.setState({username:event.target.value})
  }
  render(){
    return (
      <div className="app-main">
      <div>
        <h1>Hello {this.state.username} from BridgeLabz</h1>
        <img onClick={this.onClick} src={image} alt=""/>
      </div>
      <div>
        <input placeholder="Enter Your Name" onChange={this.onNameChange} />
      </div>
      </div>
    );
  }
}

export default App;
