
import './home.css';
import React from 'react';
import image from '../../assets/anime.jpg'

class Home extends React.Component{
  constructor(){
    super()
    this.state={
      title:'Hello There ! From BridgeLabz',
      username:'',
      nameError:''
    }
  }
  onClick = ($event) =>{
    window.open('https://unsplash.com/s/photos/anime',"_blank")
  }

  onNameChange = (event) => {
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    console.log("Value is ", event.target.value);
    this.setState({username:event.target.value})
    if(nameRegex.test(event.target.value)){
      this.setState({nameError:''})
    }else{
      this.setState({nameError:'Invalid Name'});
    }

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
        <span className="name-error">{this.state.nameError}</span>
      </div>
      </div>
    );
  }
}

export default Home;
