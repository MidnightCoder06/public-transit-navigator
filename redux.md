* requires a ton of boilerplate even to do something simple vs. using the built-in context library

* use case    
              App
            /     \
          Login  Profile
In react you can't pass state to siblings.
So if you needed to store state for a user, you couldn't have a shared useState hook in Login & Profile.
You could put it in App but that opens you up to prop drilling.
It's best to have some sort of global store which holds state -> whether that is context or redux.



Redux itself is a standalone library that can be used with any UI layer or framework,
including React, Angular, Vue, Ember, and vanilla JS.

Although Redux and React are commonly used together, they are independent of each other.

If you are using Redux with any kind of UI framework, you will normally use a "UI binding" library to tie Redux together with your UI framework, rather than directly interacting with the store from your UI code.

React Redux is the official Redux UI binding library for React. If you are using Redux and React together, you should also use React Redux to bind these two libraries.

Using Redux with any UI layer requires the same consistent set of steps:

1. Create a Redux store
2. Subscribe to updates
3. Inside the subscription callback:
- Get the current store state
- Extract the data needed by this piece of UI
- Update the UI with the data
4. If necessary, render the UI with initial state

Respond to UI inputs by dispatching Redux actions

The process of subscribing to the store, checking for updated data, and triggering a re-render can be made more generic and reusable. A UI binding library like React Redux handles the store interaction logic, so you don't have to write that code yourself.

React is generally fast, but by default any updates to a component will cause React to re-render all of the components inside that part of the component tree. This does require work, and if the data for a given component hasn't changed, then re-rendering is likely some wasted effort because the requested UI output would be the same.

If performance is a concern, the best way to improve performance is to skip unnecessary re-renders, so that components only re-render when their data has actually changed. React Redux implements many performance optimizations internally, so that your own component only re-renders when it actually needs to.

In addition, by connecting multiple components in your React component tree, you can ensure that each connected component only extracts the specific pieces of data from the store state that are needed by that component. This means that your own component will need to re-render less often, because most of the time those specific pieces of data haven't changed.



https://redux-toolkit.js.org/
* Simple
** Includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more.

* Opinionated
** Provides good defaults for store setup out of the box, and includes the most commonly used Redux addons built-in.

The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:

- "Configuring a Redux store is too complicated"
- "I have to add a lot of packages to get Redux to do anything useful"
- "Redux requires too much boilerplate code"

Before the toolkit it was more complicated to deal with:
connecting our React component to the Redux store by receiving state (e.g. via mapStateToProps) and dispatches an action (e.g. via mapDispatchToProps).

React's new "hooks" APIs give function components the ability to use local component state, execute side effects, and more. React also lets us write custom hooks, which let us extract reusable hooks to add our own behavior on top of React's built-in hooks.

React Redux includes its own custom hook APIs, which allow your React components to subscribe to the Redux store and dispatch actions.

We recommend using the React-Redux hooks API as the default approach in your React components.

The existing connect API still works and will continue to be supported, but the hooks API is simpler and works better with TypeScript.

These hooks were first added in v7.1.0.

==

describe('My Connected React-Redux Component', () => {
  it('should render with given state from Redux store', () => {

  });

  it('should dispatch an action on button click', () => {

  });
});

==

Helpful starter commands:

# Redux + Plain JS template
npx create-react-app my-app --template redux

# Redux + TypeScript template
npx create-react-app my-app --template redux-typescript


Redux Toolkit includes these APIs:

configureStore():
wraps createStore to provide simplified configuration options and good defaults.
It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.

createReducer(): that lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the `immer` library to let you write simpler immutable updates with normal mutative code, like state.todos[3].completed = true.

createAction(): generates an action creator function for the given action type string. The function itself has toString() defined, so that it can be used in place of the type constant.

createSlice(): accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.

createAsyncThunk: accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/fulfilled/rejected action types based on that promise

createEntityAdapter: generates a set of reusable reducers and selectors to manage normalized data in the store
The createSelector utility from the Reselect library, re-exported for ease of use.


RTK Query​

RTK Query is provided as an optional addon within the @reduxjs/toolkit package.
It is purpose-built to solve the use case of data fetching and caching, supplying a compact, but powerful toolset to define an API interface layer for your app. It is intended to simplify common cases for loading data in a web application, eliminating the need to hand-write data fetching & caching logic yourself.

RTK Query is built on top of the Redux Toolkit core for its implementation, using Redux internally for its architecture. Although knowledge of Redux and RTK are not required to use RTK Query, you should explore all of the additional global store management capabilities they provide, as well as installing the Redux DevTools browser extension, which works flawlessly with RTK Query to traverse and replay a timeline of your request & cache behavior.

RTK Query is included within the installation of the core Redux Toolkit package.
It is available via either of the two entry points below:

import { createApi } from '@reduxjs/toolkit/query'

React-specific entry point that automatically generates hooks corresponding to the defined endpoints
import { createApi } from '@reduxjs/toolkit/query/react'

What's included​
RTK Query includes these APIs:

createApi(): The core of RTK Query's functionality. It allows you to define a set of endpoints describe how to retrieve data from a series of endpoints, including configuration of how to fetch and transform that data.
In most cases, you should use this once per app, with "one API slice per base URL" as a rule of thumb.

fetchBaseQuery(): A small wrapper around fetch that aims to simplify requests. Intended as the recommended baseQuery to be used in createApi for the majority of users.

<ApiProvider />: Can be used as a Provider if you do not already have a Redux store.

setupListeners(): A utility used to enable refetchOnMount and refetchOnReconnect behaviors.



TODO:
 read
  - https://redux.js.org/tutorials/essentials/part-1-overview-concepts
  - https://redux.js.org/tutorials/fundamentals/part-1-overview
  - https://redux-toolkit.js.org/rtk-query/overview
