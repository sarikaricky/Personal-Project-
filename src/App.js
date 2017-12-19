import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/signin'>Sign In</Link>
      </div>
    );//add two buttons 
  }
}
    
    

export default App;
