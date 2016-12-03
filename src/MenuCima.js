import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import RaisedButton from 'material-ui/RaisedButton';


import logo from './logo.svg';
import './App.css';

class MenuCima extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
                     <h2>Welcome to CONTATO</h2>
          </div>
          <p className="App-intro">

          </p>
           <RaisedButton label="Menu" />
        </div>
      </MuiThemeProvider>
    );
  }
}
