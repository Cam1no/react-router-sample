import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <ul className="table">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    );
  }
}
