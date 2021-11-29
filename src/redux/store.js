import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice' // default, not a named variable, so you can call this whatever you want
/*
This creates a Redux store, and also automatically configure the Redux DevTools extension
so that you can inspect the store while developing.

configureStore accepts a reducer function as a named argument
*/

/*
We need to import the reducer function from the user slice and add it to our store.
By defining a field inside the reducers parameter,
we tell the store to use this slice reducer function to handle all updates to that state.
*/
export default configureStore({
  // a reducer is a function that takes in information about the current state
  // the previous state, some action that you want to take on the state, and returns a new state
  reducer: {
    siteVisitor: userReducer,
  },
});

/* alternative approach

const store = configureStore({
  reducer: {},
});
*/
