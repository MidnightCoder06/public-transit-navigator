import { configureStore } from '@reduxjs/toolkit'
/*
This creates a Redux store, and also automatically configure the Redux DevTools extension
so that you can inspect the store while developing.
*/
export default configureStore({
  // a reducer is a function that takes in information about the current state
  // the previous state, some action that you want to take on the state, and returns a new state 
  reducer: {},
});

/*
const store = configureStore({
  reducer: {},
});
*/
