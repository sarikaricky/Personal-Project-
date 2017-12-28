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

  componentWillMount(){
    //Api.get('example.com/api/users').then((data)) => {
    //this.setState({users: data});
    })
    listen(); 
  }

  componentDidMount(){
    var button = document.getElementById('button');
    debugger; 

  componentWillReceiveProps(){
    if(this.props.userId != nextProps.userId)
    if(this.props.userId == adminId){
      this.setState({ text: "bill is awesome" }
    }
  }
}
  componentWillUpdate(nextProps, nextState) {
    console.log('updating.....')
    console.logn(nextState.text);
    //https://www.youtube.com/watch?v=pW5xnis7ABk
  }

  clicked(text) {
    this.setState({ text: this.refs.textBox.value });

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
