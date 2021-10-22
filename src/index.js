import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import App from './App';
import redux from "./index/redux"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={redux}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
