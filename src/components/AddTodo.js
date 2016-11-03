import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddIcon from 'material-ui/svg-icons/content/add';

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
	render(){
		const style = {
			position: 'fixed',
			right: 50,
			bottom: 50
		}

		return(
			<div>
			<FloatingActionButton style={style} onClick={this.openModel.bind(this)}>
				<AddIcon/>
			</FloatingActionButton>
				<Dialog title="Novo Todo" open={this.state.modalOpen}  onRequestClose={this.closeModal.bind(this)}></Dialog>
			</div>
		);
	}
}

export default AddTodo;