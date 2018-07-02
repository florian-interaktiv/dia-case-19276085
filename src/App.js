import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LCC from 'lightning-container';

class App extends Component {


  constructor() {
    super();
    this.testApex = this.testApex.bind(this);
  }

  /**
   * Method executed when user clicks on Button
   */
  testApex() {

    console.log('try to call apex');

    // try to call TestController.testMethod
    LCC.callApex('TestController.testMethod', {
      ping: 'ping'
    }, (data) => {
      // this callback should be executed when testMethod was successfully called
      console.log('callback', data);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Demo App for Case #19276085</h1>
        </header>

        <div className="toolbar">
          <a onClick={this.testApex} href="javascript:void(0)">
            Call apex
          </a>
        </div>
      </div>
    );
  }
}

export default App;
