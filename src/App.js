
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
  onClick = ($event) =>{
    window.open('https://unsplash.com/s/photos/anime',"_blank")
  }
  render(){
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img onClick={this.onClick} src={image} alt=""/>
      </div>
    );
  }
}

export default App;
