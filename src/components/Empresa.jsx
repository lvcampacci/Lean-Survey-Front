import React, { Component } from 'react'
import { Card, CardTitle, CardActions, CardHeader, CardMedia, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import xvideo from './xvideo.jpg'
import redtube from './redtube.png'
import Subheader from 'material-ui/Subheader';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Dialog from 'material-ui/Dialog';

import RaisedButton from 'material-ui/RaisedButton';
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: '../xvideo.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
];

const styleImg = {
  maxHeight: "210px",
  objectFit: "contain"
};


class Empresa extends Component {
  handleDelete = () => {
    var put = JSON.stringify(this.state);
    fetch("http://xabuco.com.br/Senai-LeanSurvey/enterprise/" + this.props.dados.id, {
      method: "delete",

      body: put,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        this.props.handleDelete(this.props.dados.id);
      });
  }
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
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
        onTouchTap={this.handleDelete}
      />,
    ];

    return (
      <div>
        <Card>
          <CardHeader>
            <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
              targetOrigin={{ horizontal: 'left', vertical: 'top' }}
              >
              <MenuItem primaryText="Editar" onTouchTap={this.props.handleEdit} />

              <MenuItem primaryText="Excluir" onTouchTap={this.handleOpen}  />
            </IconMenu>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
       Deseja mesmo excluir a empresa {this.props.name}?
        </Dialog>

            <CardTitle title={this.props.dados.name} style={{ float: 'left' }} />
          </CardHeader>
          <CardMedia style={{ cursor: "pointer" }} onClick={this.props.handleNext}>
            <img style={styleImg} src={redtube} />
          </CardMedia>

          <FlatButton onClick={this.props.handleNext} label="Acessar Questionarios" style={{ color: "#4FC3F7" }} primary={true} />

        </Card>
      </div>
    );
  }
}


export default Empresa;


 /* 		          <Card>
    <CardHeader
    />
    <CardActions>
  {/*    <FlatButton label={this.props.dados.nome} />
            <FlatButton label={this.props.dados.cnpj} />

    </CardActions>
    <CardText expandable={true}>
      <md-card-subtitle>{this.props.dados.cnpj}</md-card-subtitle>
      codigo de cima pega o cnpj



        {<span>by <b> </b></span>}
           <img src="./logo.png"/>  <div>

   
	</div>

    </CardText>
  </Card>*/