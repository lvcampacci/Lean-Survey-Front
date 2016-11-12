import React from 'react';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

import TextField from 'material-ui/TextField';

class EditarEmpresa extends React.Component {
 
   state = {
     id: this.props.empresa.id,
      name: this.props.empresa.name,
      cnpj: this.props.empresa.cnpj,
      address: this.props.empresa.address,
      contactNumber: this.props.empresa.contactNumber,
      contactName:this.props.empresa.contactName,
      email: this.props.empresa.email,
      logoPath:""
  };  
   handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  componentDidMount(){
    this.props.empresa;
    console.log(this.props.empresa)
    console.log(this.state)

  }




 handleSubmit = () => {
    var put = JSON.stringify(this.state);    
    fetch("http://xabuco.com.br/Senai-LeanSurvey/enterprise/"+this.props.empresa.id,{
      method: "put",
     
      body: put,
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
 

      <h1 data-reactid="5018">Editar</h1><br/>

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
      value={this.state.cnpj}
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

    <FlatButton
      label="Editar"
      primary={true}
      onTouchTap={this.handleClose}
      onClick = {this.handleSubmit}
    />

     </div>

        
      );


  }



}


export default EditarEmpresa;