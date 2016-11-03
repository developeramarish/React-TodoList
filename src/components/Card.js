import React, { Component, PropTypes } from 'react';
import Lists from '../components/Lists';
import '../css/Card.css';

class Card extends Component{
	render(){
		return (
			
			<div className="card">
				<h2>{this.props.titulo}</h2>
				<Lists itens={this.props.itens}/>
			</div>

		);
	}

}

Card.propTypes ={
	titulo: PropTypes.string.isRequired
}

export default Card;