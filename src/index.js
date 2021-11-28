import React from 'react';
import ReactDOM from 'react-dom'; /* https://reactjs.org/docs/react-dom.html */
import { BrowserRouter } from "react-router-dom";
/* Using React Router to give a 'back button' and store pieces of the site in the url bar - still a single page application */
import './index.css';
import App from './App';

/* https://reactjs.org/docs/strict-mode.html */
/* the root id references an element in index.html in the public folder: <div id="root"></div> */
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
