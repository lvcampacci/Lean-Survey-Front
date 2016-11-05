import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import './Layoute.css';
import logo from '../../imgs/logo.png';
import logolean from './logolean.png';
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
					<div>
					//cabeçalho com as 3 imagens ou 3 opções do nosso sistema (menu principal)
								<header>
									<div>
									<img src="logolean.png"/>
									Empresas
								Relatorio
										Ajuda
									</div>
								</header>
								<section>
										//this.props.children ele ta "buscando a outra classe que ele vai abrir no section" que seria a rota
										//a principal é a layout então as outra vão ser carregadas aqui no section
										{ this.props.children }
								</section>
										// rodape do nosso sistema 
								<footer>
											Alguma dúvida? Entre em contato!
										contato@leansurvey.com.br
								</footer>
					</div>
			</MuiThemeProvider>
		);
	}
}

export default Layout;