import React from 'react';
import ReactDOM from 'react-dom'; /* https://reactjs.org/docs/react-dom.html */
import { BrowserRouter } from "react-router-dom";
/* Using React Router to give a 'back button' and store pieces of the site in the url bar - still a single page application */
import './index.css';
import App from './App';

// redux stuff
import store from './redux/store'
import { Provider } from 'react-redux'

/* https://reactjs.org/docs/strict-mode.html */
/* the root id references an element in index.html in the public folder: <div id="root"></div> */
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
