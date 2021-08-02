
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/home/home'


class App extends React.Component{
  render(){
    return (
      <div>
        <BrowserRouter>
         <Switch>
           <Route  exact path="/">
             <Home/>
           </Route>
         </Switch>
        </BrowserRouter>
      
      </div>
    );
  }
}

export default App;
