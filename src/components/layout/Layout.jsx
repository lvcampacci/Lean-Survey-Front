import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from '../../Header';

class Layout extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Header />

					{ this.props.children }
					
					<footer>
						Footer legal
					</footer>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Layout;