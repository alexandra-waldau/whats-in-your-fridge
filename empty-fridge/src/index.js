import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from './components/search';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Search/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
