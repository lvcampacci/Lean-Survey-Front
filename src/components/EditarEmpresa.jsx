import React from 'react';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import InputMask from 'react-input-mask';

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

class EditarEmpresa extends React.Component {

  state = {
    id: this.props.empresa.id,
    name: this.props.empresa.name,
    cnpj: this.props.empresa.cnpj,
    address: this.props.empresa.address,
    contactNumber: this.props.empresa.contactNumber,
    contactName: this.props.empresa.contactName,
    email: this.props.empresa.email,
    logoPath: ""
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  componentDidMount() {
    this.props.empresa;
    console.log(this.props.empresa)
    console.log(this.state)

  }




  handleSubmit = () => {
    var put = JSON.stringify(this.state);
    fetch("http://xabuco.com.br/Senai-LeanSurvey/enterprise/" + this.props.empresa.id, {
      method: "put",

      body: put,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
      });
  }






  render() {

    return (
      <div >

        <h1 data-reactid="5018">Editar</h1><br />

        <TextField
          hintText="Digite aqui o nome da empresa"
          floatingLabelText="Nome"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
          fullWidth={true}
          />

          <TextField
            hintText="Digite aqui o CNPJ da empresa"
            floatingLabelText="CNPJ"
            
            fullWidth={true} >
          <InputMask
            value={this.state.cnpj}
            name="cnpj"
            onChange={this.handleChange}
            mask="99.999.999/9999-99"/>
        </TextField>
        <TextField
          hintText="Digite aqui o endereço da empresa"
          floatingLabelText="Endereço"
          value={this.state.address}
          onChange={this.handleChange}
          name="address"
          fullWidth={true}
          />
     <TextField
          hintText="Digite aqui o numero de contato"
          floatingLabelText="Telefone"
          fullWidth={true}
          >
                <InputMask
                         value={this.state.contactNumber}
                         name="contactNumber"
                         onChange={this.handleChange}
                        mask="(99) 9999-9999"/>

        </TextField>

        <TextField
          hintText="Digite aqui o nome de um contato da empresa"
          floatingLabelText="Contato"
          value={this.state.contactName}
          onChange={this.handleChange}
          name="contactName"
          fullWidth={true}
          />
        <TextField
          hintText="Digite aqui o email de contato"
          floatingLabelText="Email"
          value={this.state.email}
          onChange={this.handleChange}
          name="email"
          fullWidth={true}
          type='email'
          />
 <TextField
          hintText="Digite a url da imagem"
          floatingLabelText="Imagem"
          value={this.state.logoPath}
          onChange={this.handleChange}
          name="logoPath"
          fullWidth={true}
          
          />

 
        <FlatButton
          label="Editar"
          primary={true}
          onTouchTap={this.handleClose}
          onClick={this.handleSubmit}
          />
 <FlatButton
          label="Cancelar"
          primary={true}
          onTouchTap={this.handleClose}
          onClick={this.handleSubmit}
          />

      
      </div>


    );


  }



}


export default EditarEmpresa;