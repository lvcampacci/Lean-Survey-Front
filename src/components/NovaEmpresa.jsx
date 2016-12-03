import React from 'react';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import InputMask from 'react-input-mask';

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
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      imageError: null
    };
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };






  cadastrarNoBanco = (ev) => {
    var inputs = {
      nome: "kenji",
      email: "kenji@gmail.com"
    };

    fetch("minhaurlmagica.com/empresa", {
      method: "post",
      body: JSON.stringify(inputs)
    })
      .then(response => response.json())
      .then(json => {

      });
  }

  state = {
    name: "",
    cnpj: "",
    address: "",
    contactNumber: "",
    contactName: "",
    email: "",
    logoPath: ""
  };


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleSubmit = () => {
    this.state.cnpj = this.state.cnpj || '';
    this.state.contactNumber = this.state.contactNumber || '';

    var post = {
      name: this.state.name,
      cnpj: this.state.cnpj.replace(/\.|\-|\//g , ''),
      address: this.state.address,
      contactName: this.state.contactName,
      contactNumber: this.state.contactNumber.replace( /\(|\)|\-/g , ''),
      email: this.state.email,
      logoPath: this.state.logoPath
    };

    post = JSON.stringify(post);


console.log(123);
    fetch("http://xabuco.com.br/Senai-LeanSurvey/enterprise", {
      
      method: "post",
     body: post,
      mode: 'cors',
     'Accept': 'application/json',
    headers:{
      'Content-Type': 'application/json', 
     cache: 'default'
    }})
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.props.handleClose()
      })
      .catch(error => {
        this.props.handleClose();
      })
console.log(post);
  }


  validateFile(e) {
      var file = e.target.files[0];
      var maxSize = 1024*1024*1;
      var valid = true;
      var validateType = /image\//;

      if(!validateType.test(file.type)) {
        this.setState({imageError: 'Mano kd a imagem!!!'});
        valid = false;
      }

      if(file.size > maxSize) {
        this.setState({imageError: 'Mano olha o tamanho disso!!!'});
        valid = false;
      }


      if(valid) {
        this.setState({logoPath: file});
      }

  }


  render() {
    return (
      <div >
        <h1 data-reactid="5018">Cadastrar Empresa do mundo Porno</h1><br />
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
          
          />
      <TextField
          hintText="Digite a url da imagem"
          floatingLabelText="Imagem"
          value={this.state.logoPath}
          onChange={this.handleChange}
          name="logoPath"
          fullWidth={true}
          
          />



        <RaisedButton
          label="Cadastrar"
          primary={true}
          onTouchTap={this.handleTouchTap}
          onClick={this.handleSubmit}
          />
        <Snackbar
          open={this.state.open}
          message="Cadastro realizado com Sucesso !"
          autoHideDuration={2000}
          onRequestClose={this.handleRequestClose}
          />
        <FlatButton
          label="Cancelar"
          primary={true}
          onTouchTap={this.props.handleClose}
          />

      </div>

    );

  }

}


export default NovaEmpresa;