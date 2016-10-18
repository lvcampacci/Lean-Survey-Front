import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Header from '../../Header';
import './Layoute.css';
import logo from '../../logo.png';
const style = {
  height: 50,
  width: 70,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
 
};
class Layout extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div><header>

  <div>
    <Paper style={style} zDepth={1} />
    <Paper style={style} zDepth={2} />
    <Paper style={style} zDepth={3} />
    
  </div>
);
					</header>

					{ this.props.children }
					
					<footer>
					Copyright © 2016 Lean Survey Template. All Right Reserved Designed by SENAI
					</footer>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Layout;