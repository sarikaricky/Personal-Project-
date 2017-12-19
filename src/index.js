import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Link, Route } from 'react-router-dom';
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import SignIn from './signin';


ReactDOM.render((
  <Router>
    <div>
        <Route exact path="/" component={App} />
        <Route path="/signin" component={SignIn} />
    </div>
  </Router>
), document.getElementById('root'));

registerServiceWorker();