import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './section.css';

class Section extends Component {
  render() {
    return (
      <MuiThemeProvider>
<div id="section">

         <div id="sectioncima">
            <h1>Empresa</h1>
            <input type="text" value="Procura i" size="50" id="search" name="search"/>
        </div>
             <div id="sectionconteudo">

              </div>
</div>
      </MuiThemeProvider>
    );
  }
}

export default Section;