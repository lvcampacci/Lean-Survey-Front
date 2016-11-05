import React from 'react';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

import TextField from 'material-ui/TextField';

class EditarEmpresa extends React.Component {
 
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
      value = {this.state.cnpj}
      onChange = {this.handleChange}
      name = "cnpj"
      fullWidth={true}
    />



     </div>

        
      );


  }



}


export default EditarEmpresa;