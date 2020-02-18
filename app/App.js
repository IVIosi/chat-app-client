import React, { Component } from "react";
import { hot } from "react-hot-loader";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Welcome!</h1>
      </div>
    );
  }
}

export default hot(module)(App);