import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import './Login.css';


class Auth extends Component {
	
	state = {
		error: null
	}


	/**
	 * Render the component
	 */
	render() {
		const styles = {
			width: 500,
			margin: 'auto'
		};


		const socialButton = {
			height: 60,
			borderRadius: 30
		}

		return (
			<MuiThemeProvider>
			<Card style={styles} className="Auth">
				<CardTitle title="Login" />

				<CardText>
					<form>
						<TextField 
							required={true}
							fullWidth={true}
							floatingLabelText="Email" />
						<TextField 
							type="password"
							required={true}
							fullWidth={true}
							floatingLabelText="Senha: " />

						<RaisedButton primary={true} label="Login" />


						<p className="error"> { this.state.error } </p>

					</form>
				</CardText>

			</Card>

			
			</MuiThemeProvider>
		);
	}
}

export default Auth;