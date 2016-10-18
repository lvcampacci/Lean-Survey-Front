import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';

import logo from './logo.png';
import empresa from './empresa.png';
import relatorio from './relatorio.png';
import ajuda from './ajuda.png';


import './Header.css';

class Home extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div id="menutopo">
          <div id="logo">
            <img src={ logo }/>
            <img src={ empresa } width="120px" />
            <img src={ relatorio } width="120px" />
            <img src={ ajuda } width="120px" />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }

}

export default Home;