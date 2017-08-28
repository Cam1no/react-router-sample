import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Contact from './contact';
import About from './about';
import Home from './home';
import './index.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render((
  <BrowserRouter>
    <div>
      <App />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();
