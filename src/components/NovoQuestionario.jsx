import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import { List, ListItem } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import TextField from 'material-ui/TextField';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';

import { blue500, yellow600 } from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import FlatButton from 'material-ui/FlatButton';
import Edit from 'material-ui/svg-icons/image/edit';
import Add from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import NovaPergunta from './NovaPergunta';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
const style = {
  marginRight: 20,
};
const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};


class NovoQuestionario extends React.Component {
  state = {
    open: false,
    questionario:{
      titulo: '',
      descricao: ''
    
    }
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange = (ev)=>{
    var questionario = this.state.questionario;
    questionario.titulo = ev.target.value;
    this.setState({
      questionario: questionario
    });
  }

  mandaAPI() {
    var dados = this.state.questionario
    dados.empresaid = this.props.empresaid
  }
 
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
        />,
      <FlatButton
        label="Submit"
        primary={true}

        onTouchTap={this.handleClose}
        />,
    ];


    return (
      <div style={{ margin: "10px auto" }}>
        <List>
          <h3>MEU título é: {this.state.questionario.titulo}</h3>
          <TextField
            hintText="Digite aqui o titulo do questionario"
            floatingLabelText="Título"
            fullWidth={true}
            value={this.state.questionario.titulo}
            onChange={this.handleChange}
          
            />
     

          <TextField
            hintText="Digite a Descrição do questionario"
            multiLine={true}
            
            rowsMax={4}
            />
  <div>
    <DatePicker locale="br-pt" hintText="Coloque a data inicial do questionario" />
        <DatePicker hintText="Coloque a data final do questionario" />
  </div>
          <ListItem
            leftAvatar={<Avatar icon={<FileFolder />} />}
            rightIcon={<ActionInfo />}
            primaryText="Qual seu nome?"
            secondaryText="Dissertativa"
            />
          <ListItem
            leftAvatar={<Avatar icon={<FileFolder />} />}
            rightIcon={<Edit />}
            primaryText="Qual as cores da sua calcinha?"
            secondaryText="Check"
            />
          <ListItem />
           </List>

            <RaisedButton label="Adicionar Pergunta" onTouchTap={this.handleOpen} />
            <Dialog
              title="Nova Pergunta"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
              autoScrollBodyContent={true}
              >
              <NovaPergunta questionario={this.state.questionario} />
            </Dialog>
   

   

      </div>
    );
  }
}



export default NovoQuestionario;