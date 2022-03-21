import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Contextapi} from './context';
import {Routing} from './routing';


ReactDOM.render(
  <React.StrictMode>
  <Contextapi>
    <Routing />
  </Contextapi>
  </React.StrictMode>,
  document.getElementById('root')
);
