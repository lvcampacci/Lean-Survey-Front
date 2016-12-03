import React, { Component } from 'react'
import { Card, CardTitle, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import CardQuestionario from './CardQuestionario.jsx';

class QuestionariosEmpresa extends React.Component{

	render() {
		return (
			<div >
				{
					this.props.questionarios.map((item)=>{
						return <CardQuestionario questionario={item} handleDeleteQuestionario={ this.props.handleDeleteQuestionario(item.id) } />
					})
				}
			</div>
		);
	}
}



export default QuestionariosEmpresa;