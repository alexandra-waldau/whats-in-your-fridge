import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from './components/search';
import * as serviceWorker from './serviceWorker';
import Recipe from './components/recipe';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Search}/>
        <Route path="/recipe/:id" component={Recipe}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
