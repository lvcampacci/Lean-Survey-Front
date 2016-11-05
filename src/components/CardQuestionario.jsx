import React, {Component} from "react";
import {
    Card,
    CardTitle,
    CardText,
    CardActions
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
 

class CardQuestionario extends Component{
    state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  }; render()
    {   const actions = [
      <FlatButton
        label="Cancelar"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Excluir"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];
        return(
            <Card>
                <CardTitle title={this.props.questionario.title} />
                <CardText>
                    {this.props.questionario.descricao}
                </CardText>
                <CardActions>
                    <FlatButton label="Editar" onTouchTap={this.props.handleNext}/>
              <FlatButton onClick={this.props.handleNext} label="Acessar Questionarios" style={{ color: "#4FC3F7" }} primary={true} />

        <RaisedButton label="Excluir" onTouchTap={this.handleOpen} />
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
       Tem certeza que deseja excluir essa merda ?
        </Dialog>
    
                </CardActions>
            </Card>
        );
    }
}

export default CardQuestionario;