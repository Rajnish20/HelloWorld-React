
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/home/home'
import Home1 from './component/home/home1'


class App extends React.Component{
  render(){
    return (
      <div>
        <BrowserRouter>
         <Switch>
           <Route  exact path="/">
             <Home/>
           </Route>
           <Route path="/home1" component={Home1}/>
         </Switch>
        </BrowserRouter>
      
      </div>
    );
  }
}

export default App;
