import React from 'react';
import { ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import DeleteIcon from 'material-ui/svg-icons/action/delete';


class RespostaItem extends React.Component {

    componentWillMount() {
        this.setState({
            descricao: this.props.descricao
        })

    }


    deleteResposta() {
        this.props.deleteResposta(this.props.index)
    }



    handleChange(evento) {
        var descricao = evento.target.value;
        this.setState({
            descricao: descricao
        });

        this.props.setDescricao(descricao, this.props.index)        
    }

    render() {
        console.log(this.props.descricao)
        return <ListItem 
                    primaryText={
                        <TextField 
                            name="descricao" 
                            hintText="Digite uma descricação..."
                            onChange={this.handleChange.bind(this)}
                            defaultValue={this.props.descricao}
                            fullWidth={true} />
                    }
                    rightIconButton={<IconButton onClick={this.deleteResposta.bind(this)}><DeleteIcon /></IconButton>} 
                    leftIcon={<ContentInbox />} />
    }
}


export default RespostaItem;