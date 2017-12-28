import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Link, Route } from 'react-router-dom';
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import SignIn from './signin';
import SignUp from './signup';


ReactDOM.render((
  <Router>
    <div>
        <Route exact path="/" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
    </div>
  </Router>
), document.getElementById('root'));

// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Sign In";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("Sign Up");
});

/* Read 

https://css-tricks.com/use-button-element/
*/

registerServiceWorker();