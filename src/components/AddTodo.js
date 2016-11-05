import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import AddTarefas from './AddTarefas.js';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class AddTodo extends Component{

	state = {
		modalOpen: false
	}


	closeModal(){

		this.setState({
			modalOpen: false
		})
	}

	openModel(){
		this.setState({
			modalOpen: true
		})
	}

	cadastrar(){
		var tarefas = this.refs.tarefas.getDescricoes();
		var dados = {
			titulo: this.refs.nome.getValue(),
			tarefas: tarefas
		}

		fetch('https://private-00cf6-reacttodo.apiary-mock.com/lista',{ method: 'post', body:JSON.stringify(dados)})
			.then(response => response.json())
			.then(response => {
				console.log(response);

				this.props.addTodo(response);
				this.closeModal();
			});
	}

	render(){
		const style = {
			position: 'fixed',
			right: 50,
			bottom: 50
		}

		const actions = [
			<FlatButton label="Cancelar" onClick={this.closeModal.bind(this)} />,
			<RaisedButton label="Cadastrar" primary={true} onClick={this.cadastrar.bind(this)} />
		];

		return(
			<div>
			<FloatingActionButton style={style} onClick={this.openModel.bind(this)}>
				<AddIcon/>
			</FloatingActionButton>
				<Dialog title="Novo Todo" open={this.state.modalOpen} actions={actions} onRequestClose={this.closeModal.bind(this)}>

				<form>
					<TextField ref="nome" fullWidth={true} floatingLabelText="Nome do Todo"/>
					<AddTarefas ref='tarefas'/>
				</form>
				</Dialog>
			</div>
		);
	}
}

export default AddTodo;