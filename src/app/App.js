import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home";
import Calculator from './Components/Calculator';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/calculator' component={Calculator}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
