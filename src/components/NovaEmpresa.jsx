import React from 'react';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

import TextField from 'material-ui/TextField';
const style = {
  marginLeft: 20,
};

const styles = {
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

class NovaEmpresa extends React.Component {
  cadastrarNoBanco = (ev)=>{
    var inputs = {
      nome: "kenji",
      email: "kenji@gmail.com"
    };

    fetch("minhaurlmagica.com/empresa",{
      method: "post",
      body: JSON.stringify(inputs)
    })
    .then(response=> response.json())
    .then(json=>{
      
    });
  }

  state = {
      name: "",
      cnpj: "",
      address: "",
      contactNumber: "",
      contactName:"",
      email: "",
      logoPath:""
  };

   handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = () => {
    var post = JSON.stringify(this.state);    
    fetch("http://localhost/Senai-LeanSurvey/enterprise",{
      method: "post",
     
      body: post,
       headers: {
            'Content-Type': 'application/json'
       }
    })
    .then(response=> response.json())
    .then(response=>{
      console.log(response);
    });
  }


	render(){
		return(
			<div >
      <h1 data-reactid="5018">Cadastrar Empresa do mundo Porno</h1><br/>
      <TextField
        hintText="Digite aqui o nome da empresa"
        floatingLabelText="Nome"
        value = {this.state.name}
        onChange = {this.handleChange}
        name = "name"
        fullWidth={true}
      />
      <TextField
      hintText="Digite aqui o CNPJ da empresa"
      floatingLabelText="CNPJ"
      value = {this.state.cnpj}
      onChange = {this.handleChange}
      name = "cnpj"
      fullWidth={true}
    />
     
      <TextField
      hintText="Digite aqui o endereço da empresa"
      floatingLabelText="Endereço"
        value = {this.state.address}
      onChange = {this.handleChange}
      name = "address"
      fullWidth={true}
    />
          <TextField
      hintText="Digite aqui o numero de contato"
      floatingLabelText="Telefone"
        value = {this.state.contactNumber}
      onChange = {this.handleChange}
      name = "contactNumber"
      fullWidth={true}
    />
 
      <TextField
      hintText="Digite aqui o nome de um contato da empresa"
      floatingLabelText="Contato"
       value = {this.state.contactName}
      onChange = {this.handleChange}
      name = "contactName"
      fullWidth={true}
    />
            <TextField
      hintText="Digite aqui o email de contato"
      floatingLabelText="Email"
       value = {this.state.email}
      onChange = {this.handleChange}
      name = "email"
      fullWidth={true}
    />

   

    <div>
    Busque o logo da empresa
          <FlatButton label="Buscar" labelPosition="before" >
              <input type="file" style={styles.exampleImageInput} name="logoPath" />
          </FlatButton><br/>
       
</div>
 <FlatButton
      label="Cancelar"
      primary={true}
      onTouchTap={this.handleClose}
    />
    <FlatButton
      label="Cadastrar"
      primary={true}
      onTouchTap={this.handleClose}
      onClick = {this.handleSubmit}
    />
      </div>

		);

	}

}


export default NovaEmpresa;