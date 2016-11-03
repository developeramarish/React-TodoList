import React, { Component,PropTypes } from 'react';
import ListItem from '../components/ListItem'

class Lists extends Component{
	


	

	renderItem(){

		return this.props.itens.map(item => {
			return <ListItem info={item.descricao}/>
		});


	}

	render(){

		return (
			<ul className="todo-list">
				{this.renderItem()}
			</ul>
		);
	}

}

export default Lists;



