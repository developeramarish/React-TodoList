import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  SearchField from './components/SearchField';
import Card from './components/Card';
import Menu from './components/Menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
	      <div className="App">
	      	<Menu/>
			{ this.props.children }       
	      </div>
      </MuiThemeProvider>
    );
  }
}
export default App;
