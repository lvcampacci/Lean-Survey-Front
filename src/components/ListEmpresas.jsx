import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import NovoQuestionario from './NovoQuestionario';
import RaisedButton from 'material-ui/RaisedButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import QuestionariosEmpresa from './QuestionariosEmpresa';
import Empresa from './Empresa';
import NovaEmpresa from './NovaEmpresa';
import EditarEmpresa from './EditarEmpresa';
const style = {
  marginRight: 20,
};

class ListEmpresas extends React.Component {
 state = {
    open: false,
    empresa: null,
    questionario: null
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  state = {
    loading: false,
    finished: false,
    stepIndex: 0,
    empresas: []
  };

  componentDidMount() {

    // this.state.empresass

    fetch('http://localhost/Senai-LeanSurvey/enterprise/', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          empresas: response
        })
      })
      .catch(erro => {

      });
  }


  dummyAsync = (cb) => {
    this.setState({ loading: true }, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  // fazerRequest = (url,cb)=>{
  //   return fetch(url)
  //   .then(response => response.json())
  //   .then(json =>{
  //     cb(json);
  //   });
  // }



  // pegarQuestionariosDaEmpresa = ()=>{
  //   var minhafuncaoaoterminararequest = (json)=>{
  //       this.setState({
  //         questionarios: json
  //       });
  //       this.vaiPraProximaPagina();
  //   };
  //   return fazerRequest("https://private-7b53bd-leansurvey.apiary-mock.com/questionario",minhafuncaoaoterminararequest)
  // }

  handleEdit = (empresa) => {
    
   this.setState({
     empresa:empresa,
     open:true
    })
    
    // chamar a modal , e enviar os parametros e la no modal receber como this.prop.empresa**
  };

  //proxima pagina que tem que ir
  handleNext = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2,
      }));
    }
  };

  selectEmpresa = (dadosEmpresa) => {
    console.log(dadosEmpresa);
      this.setState({
        empresa: dadosEmpresa
      })
      this.handleNext();
  }

  //pagina anterio que tem que ir empresa null no close
  handlePrev = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex - 1,
      }));
    }
  };

  //ele vai renderizar as empresas mapeando e trazendo os dados
  renderEmpresas() {
    //aqui esta mapeando as empresas por exemplo mandado a empresa 1 depois a 2 depois a 3 tipo um array
    return this.state.empresas.map((empresa) => {
      // aqui ele esta retornando a empresa ja mapeada mandou la em dados o id da empresa por exemplo e o metodo de HandleNext que é ir para proxima pagina
      return (<Empresa dados={empresa} handleNext={this.selectEmpresa} handleEdit={this.handleEdit.bind(this, empresa)} />);
    })
  }
  renderQuestionariosEmpresa() {
    return (<QuestionariosEmpresa handleNext={this.handleNext}/>);
  }
  renderNovoQuestionario() {
    return (<NovoQuestionario  />);
  }


  getStepContent(stepIndex) {

    switch (stepIndex) {
      case 0:
        return (
          <div>
          
            <TextField fullWidth={true} style={{ marginTop: 0 }} floatingLabelText="Pesquisar Empresa" />
        <div>
          <RaisedButton label="Adicionar Empresa" onTouchTap={this.handleOpen} />
          <Dialog
            title="Cadastro de Empresa"
            autoScrollBodyContent={true}
            empresa={this.state.empresa}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            {this.state.empresa && <EditarEmpresa/>}
            {!this.state.empresa && <NovaEmpresa/>}

          </Dialog>
        </div>
        <div onTouchTap={this.props.handleNext} style={{ display: 'flex', flexWrap: 'wrap' }}>
          {this.renderEmpresas()}
        </div>
      </div>
        );
      case 1:
        return (
          <div>
            <TextField style={{ marginTop: 0 }} floatingLabelText="Pesquisar Questionario" />  <br />
            <RaisedButton label="Adicionar Questionario" primary={true} style={style} href="/admin/empresa/questionario/novo" />
            <div onTouchTap={this.props.handleNext} style={{ display: 'flex' }}>
              {this.renderQuestionariosEmpresa()}

            </div>

          </div>
        );
      case 2:
        return (
          <div style={{ display: 'flex' }}>
            {this.renderNovoQuestionario()}
          </div>
        );
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  renderContent() {
    const {finished, stepIndex} = this.state;
    const contentStyle = { margin: '0 16px', overflow: 'hidden' };

    if (finished) {
      return (
        <div style={contentStyle}>
          <p>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({ stepIndex: 0, finished: false });
              } }
              >
              Click here
            </a> to reset the example.
          </p>
        </div>
      );
    }

    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
        <div style={{ marginTop: 24, marginBottom: 12 }}>
          <FlatButton
            label="Voltar"
            disabled={stepIndex === 0}
            onTouchTap={this.handlePrev}
            style={{ marginRight: 12 }}
            />
          <RaisedButton
            label={stepIndex === 2 ? 'Testar' : 'Próxima'}
            primary={true}
            onTouchTap={this.handleNext}
            />
        </div>
      </div>
    );
  }

  render() {
    const {loading, stepIndex} = this.state;

    return (
      <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Selecione a Empresa</StepLabel>
          </Step>
          <Step>
            <StepLabel>Questionarios da Empresa</StepLabel>
          </Step>
          <Step>
            <StepLabel>Criar um Questionario</StepLabel>
          </Step>
        </Stepper>
 
    
          {this.renderContent()}

      </div>
    );
  }
}


export default ListEmpresas;