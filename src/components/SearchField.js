import React, { Component, PropTypes } from 'react';
import '../css/SearchField.css';





class SearchField extends Component {


	handleKeyUp(evento){
		this.props.onSearch(evento.target.value);
	}

	
  render() {
    return (
      <form className="search-form" >
      	<input 
      	onKeyUp={this.handleKeyUp.bind(this)}
      	type="search" placeholder={this.props.texto} />
      </form>
        
     

    );
  }
}


SearchField.propTypes = {
	texto: PropTypes.string.isRequired
};

export default SearchField;
