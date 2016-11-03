import React, { Component, PropTypes} from 'react';

class ListItem extends Component{
	render(){
		return (
			<div className="ListItem">
				<input type="checkbox"/>
				<span>{this.props.info}</span>
			</div>
		);
	}

}

export default ListItem;

