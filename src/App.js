
import './App.css';
import React from 'react';
import image from './assets/anime.jpg'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      title:'Hello There ! From BridgeLabz'
    }
  }
  render(){
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={image} alt=""/>
      </div>
    );
  }
}

export default App;
