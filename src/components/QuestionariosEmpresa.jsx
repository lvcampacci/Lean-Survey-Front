import React, { Component } from 'react'
import { Card, CardTitle, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import CardQuestionario from './CardQuestionario.jsx';

class QuestionariosEmpresa extends React.Component{

	render() {
		// Vai pedir pra API!!!!!!!!
		var questionarios = [
			{
				title: "NOME DO QUESTIONARIO",
				descricao: "Questionário para verificar se eu vouy passar de ano no JPMORGAN :))) "
			},
			{
				title: "BRAZZER QUESTIONARIO",
				descricao: "Questionário para verificar se eu vouy passar de ano no JPMORGAN :))) "
			},
			{
				title: "BRAZZER QUESTIONARIO",
				descricao: "Questionário para verificar se eu vouy passar de ano no JPMORGAN :))) "
			}
		];
		return (
			<div >
				{
					questionarios.map((item)=>{
						return <CardQuestionario questionario={item} />
					})
				}
			</div>
		);
	}
}



export default QuestionariosEmpresa;