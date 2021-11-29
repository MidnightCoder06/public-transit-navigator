/*
Creating a slice requires a string name to identify the slice, an initial state value,
and one or more reducer functions to define how the state can be updated.
Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.
*/

/*
Call createSlice with a string name, an initial state, and named reducer functions
Reducer functions may "mutate" the state using `Immer` library
Export the generated slice reducer and action creators
*/
import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'siteVisitor',
  initialState: {
    value: {
      selectedTransportationModeX: "",
      selectedDirection: "",
      selectedStop: ""
    }
  },
  reducers: {
    // `state` keeps track of the current state
    setSelectedTransportationModeX: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log(state, action)
      //state.selectedTransportationMode = action.payload
    },
    setDirectionSelectedX: (state, action) => {
      console.log(state, action)
      //state.value.selectedDirection = action.payload
    },
    // action is an object -> {payload & type} as values
    setSelectedStopX: (state, action) => {
      console.log(state, action)
      //state.value.selectedStop = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSelectedTransportationModeX, setDirectionSelectedX, setSelectedStopX } = userSlice.actions

export default userSlice.reducer
