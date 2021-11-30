import React from 'react';
import ReactDOM from 'react-dom'; /* https://reactjs.org/docs/react-dom.html */
import { BrowserRouter } from "react-router-dom";
/* Using React Router to give a 'back button' and store pieces of the site in the url bar - still a single page application */
import './index.css';
import App from './App';

// redux stuff
import store from './redux/store'
import { Provider } from 'react-redux' // you should start by wrapping your entire application in a <Provider> component to make the store available throughout the component tree

/* Custom context

The <Provider> component allows you to specify an alternate context via the context prop.
This is useful if you're building a complex reusable component,
and you don't want your store to collide with any Redux store your consumers' applications might use.

To access an alternate context via the hooks API, use the hook creator functions:

import React from 'react'
import {
  Provider,
  createStoreHook,
  createDispatchHook,
  createSelectorHook
} from 'react-redux'

const MyContext = React.createContext(null)

// Export your custom hooks if you wish to use them in other files.
export const useStore = createStoreHook(MyContext)
export const useDispatch = createDispatchHook(MyContext)
export const useSelector = createSelectorHook(MyContext)

const myStore = createStore(rootReducer)

export function MyProvider({ children }) {
  return (
    <Provider context={MyContext} store={myStore}>
      {children}
    </Provider>
  )
}

*/

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
