import React, { Component } from 'react';
import SearchField from  './SearchField';
import Card	 from'./Card';
import AddTodo from './AddTodo';

class TodoGrid extends Component{

	
	state = { todos:[],
			   searchValue: ""
	}
	
	renderCards(){
		var todosFilter = this.state.todos;

		todosFilter = todosFilter.filter(todo => {
			return todo.titulo.indexOf(this.state.searchValue) > -1;
		});


		return todosFilter.map(todo => {
			return <Card key={todo.id} 
					itens={todo.itens}
					titulo={todo.titulo} />
		});
	}

	handleSearch(texto){
		
		 this.setState({searchValue : texto})
	}


	componentDidMount(){
		fetch('https://private-00cf6-reacttodo.apiary-mock.com/lista')
			.then(response => response.json())
			.then(response => {
				this.setState({
					todos: response
				});
			});
	}

	AddTodo(dados){
		this.setState({
			todos: this.state.todos.concat(dados)
		})
	}

	render(){
		return(
			<div>	
				<SearchField 
				onSearch={this.handleSearch.bind(this)}
				texto="Procurando nemo onde ele está? "/>
	        	{this.renderCards()}
	        	<AddTodo addTodo={this.AddTodo.bind(this)}/>
        	</div>
		);
	}

}

export default TodoGrid