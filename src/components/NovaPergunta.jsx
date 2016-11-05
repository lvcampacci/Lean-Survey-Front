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
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import { blue500, yellow600 } from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import FlatButton from 'material-ui/FlatButton';
import Edit from 'material-ui/svg-icons/image/edit';
import Add from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import Toggle from 'material-ui/Toggle';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';

import RespostaItem from './RespostaItem'

class NovaPergunta extends React.Component {

  state = {
    respostas: [],
    condicoes: [],
    _index: 0,
    novapergunta:{
      titulo:"",
      descricaopergunta:""
    }
  };

  statepergunta = {

  }

handleChange = (ev)=>{
  var novapergunta = this.state.novapergunta;
  novapergunta.titulo = ev.target.value;
  this.setState({
      novapergunta: novapergunta
  });
}
  addResposta() {

    var respostas = this.state.respostas.concat({
      index: this.state._index++,
      descricao: this.state._index
    });

    this.setState({
      respostas: respostas
    })

  }



  deleteResposta(index) {
    console.log("estou deletando o " + index);
    console.log("estou deletando o " + this.state.respostas[index].descricao);
    var respostasFilter = this.state.respostas.filter((resposta, i) => {
      return i != index;
    });

    this.setState({
      respostas: respostasFilter
    })

  }

  //PATRICK MONSTRAO RESOLVEU TUDO !!! KEVIN SEGURA ESSA 
  setDescricao(descricao, index) {
    this.state.respostas.map(resposta => {
      if (resposta.index == index)
        resposta.descricao = descricao;

      return resposta;
    })

  }


  renderRespostas() {
    return this.state.respostas.map((resposta, i) => {

      return <RespostaItem key={resposta.index}
        deleteResposta={this.deleteResposta.bind(this)}
        setDescricao={this.setDescricao.bind(this)}
        descricao={this.state.respostas[i].descricao}
        index={i}
        />
    })
  }



  render() {
    
    console.log("renderiznado");
    return (
      <div>
        <TextField
          hintText="Digite aqui o titulo da pergunta"
          floatingLabelText="Titulo da Pergunta"
          fullWidth={true}
          value = {this.state.novapergunta.titulo}
          onChange={this.handleChange}
          name="titulo"
          />
           <h3>MEU título é: {this.state.novapergunta.titulo}</h3>
        <TextField
          hintText="Digite a Descrição da pergunta "
            floatingLabelText="Descrição da Pergunta"
          multiLine={true}
          fullWidth={true}
          rowsMax={4}
          />
            <Toggle
      label="Obrigatória"
      labelPosition="right"
    />
        Respostas
          <List>
          {this.renderRespostas()}
          <ListItem
            onClick={this.addResposta.bind(this)}
            rightIcon={<Add />}
            primaryText="Adicione uma nova Resposta"
            />
        </List>

      </div>

    );



  }
}

export default NovaPergunta;