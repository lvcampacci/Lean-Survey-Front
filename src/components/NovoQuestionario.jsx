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
    questionario: {
      titulo: '',
      descricao: ''

    },
    questoes: []
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  handleCadastrar = () => {
    var pergunta = this.refs.novaPergunta.state;


    // .map
    // nome - stringify
    // perguntas = ["fawefaw", "fawefawef"]


    var dados = {
      title: pergunta.titulo,
      description: pergunta.descricao,
      questions: pergunta.respostas,
      questionType: pergunta.questionType
    };


    this.setState({
      questoes: this.state.questoes.concat(dados)
    });


    dados = JSON.stringify(dados);

    console.log(dados);


    this.handleClose();

    
    // fetch('http://xabuco.com.br/Senai-LeanSurvey/enterprise/', {
    //   method: 'POST',
    //   body: dados
    // })
    //   .then((response) => response.json())

  };


  handleChange = (ev) => {
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


  handleRemoveItem(index) {
    this.setState({
      questoes: this.state.questoes.filter((questao, i) => i !== index)
    })
  }


  renderQuestoes() {
    return this.state.questoes.map((questao, i) => (
      <ListItem
        key={i}
        leftAvatar={<Avatar icon={<FileFolder />} />}
        rightIcon={<ActionInfo onClick={() => this.handleRemoveItem(i)}/>}
        primaryText={questao.title}
        secondaryText={questao.description}
        />
    ))

  }


  render() {
    var DateTimeFormat = global.Intl.DateTimeFormat;
    const actions = [
      <FlatButton
        label="Cancelar"
        primary={true}
        onTouchTap={this.handleClose}
        />,
      <RaisedButton
        label="Cadastar"
        primary={true}

        onTouchTap={this.handleCadastrar}
        />,
    ];


    return (
      <div style={{ margin: "10px auto", width: '50%' }}>

        <h3>MEU título é: {this.state.questionario.titulo}</h3>
        <TextField
          hintText="Digite aqui o titulo do questionario"
          floatingLabelText="Título"
          fullWidth={true}
          value={this.state.questionario.titulo}
          onChange={this.handleChange}

          />
  <TextField
          hintText="Coloque o preço"
          floatingLabelText="Preço"
          fullWidth={true}
          value={this.state.questionario.price}
          onChange={this.handleChange}

          />

        <TextField
          hintText="Digite a Descrição do questionario"
          multiLine={true}
          fullWidth={true}
          rowsMax={4}
          />

        <div>
          <DatePicker DateTimeFormat={DateTimeFormat} locale="pt-BR" hintText="Coloque a data inicial do questionario" okLabel="Ok" cancelLabel="Cancelar" fullWidth={true} />
          <DatePicker DateTimeFormat={DateTimeFormat} locale="pt-BR" hintText="Coloque a data final do questionario" okLabel="Ok" cancelLabel="Cancelar" fullWidth={true} />
        </div>

        <h5>Questões</h5>


        <List>
          {this.renderQuestoes()}
        </List>

        <RaisedButton label="Adicionar Pergunta" onTouchTap={this.handleOpen} />
        <Dialog
          contentStyle={{ transform: 'translate(0, -18%)' }}
          title="Nova Pergunta"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
          >
          <NovaPergunta ref="novaPergunta" questionario={this.state.questionario} />
        </Dialog>




      </div>
    );
  }
}



export default NovoQuestionario;