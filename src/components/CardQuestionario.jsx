import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';


class CardQuestionario extends Component {
  handleDeleteQuestionario = () => {
    var put = JSON.stringify(this.state);
    fetch("http://xabuco.com.br/Senai-LeanSurvey/questionnaire/" + this.props.dados.id, {
      method: "delete",

      body: put,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        this.props.handleDelete(this.props.dados.id);
      });
    this.handleClose();
  }



  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };



  componentDidMount() {
    this.props.empresa;
    console.log(this.props.empresa)
    console.log(this.state)

  }




  render() {
    const actions = [
      <FlatButton
        label="Cancelar"
        primary={true}
        onTouchTap={this.handleClose}
        />,
      <FlatButton
        label="Excluir"
        primary={true}
        onTouchTap={this.handleDeleteQuestionario} />,
    ];
    return (
      <Card style={{ float: 'left', width: 310, margin: 8, overflow: 'hidden' }}>
        <CardTitle title={this.props.questionario.title} />
        <CardText>
          {this.props.questionario.description}
        </CardText>
        <CardActions>
          <FlatButton label="Editar" onTouchTap={this.props.handleNext} />

          <FlatButton label="Excluir" onTouchTap={this.handleOpen} />
          <Dialog
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            >
            Tem certeza que deseja excluir esse questionario ?
        </Dialog>

        </CardActions>
      </Card>
    );
  }
}

export default CardQuestionario;