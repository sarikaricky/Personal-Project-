import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super(this); 
    this.state = {
      text: "Initial text"
    };
  }

  clicked(text) {
    this.setState({ text: this.refs.textBox.val() });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Page One</h1>
        </header>
        <p className="App-intro">
         Sign-In
        </p>
      </div>
    );
  render () 
    console.log('rendering')
    const img = assets("./images/sign-i.njpg")

    return<div>
      { this.state.text }
      <img src={img} />
      <input ref="textBox" type="text" />
      <button onClick={ (e) => {this.clicked("hello"); } }>TheButton</button>
      </div>;
  }
}
    

export default App;
