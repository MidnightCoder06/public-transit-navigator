import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedStop } from '../features/userSlice';
import '../styles/DropdownMenu.css';
/*
Now we can use the React Redux hooks to let React components interact with the Redux store.
We can read data from the store with useSelector, and dispatch actions using useDispatch.
*/

/*
Use the React Redux useSelector/useDispatch hooks in React components
Read data from the store with the useSelector hook
Get the dispatch function with the useDispatch hook, and dispatch actions as needed
*/

// stop means your destination
  // Have the list of options be dependent on the mode of transportation
const StopSelection = (props) => {
  const { setIsStopSelected } = props;
  const [stops, setStops] = useState(['Select stop', 'mock stop 1', 'mock stop 2']);

  const dispatch = useDispatch()
  /*

  useDispatch() returns a reference to the dispatch function from the Redux store.
  You may use it to dispatch actions as needed.

  example:

  import React from 'react'
  import { useDispatch } from 'react-redux'

  export const CounterComponent = ({ value }) => {
    const dispatch = useDispatch()

    return (
      <div>
        <span>{value}</span>
        <button onClick={() => dispatch({ type: 'increment-counter' })}>
          Increment counter
        </button>
      </div>
    )
  }

  #####


  When passing a callback using dispatch to a child component, you may sometimes want to memoize it with useCallback.
  If the child component is trying to optimize render behavior using React.memo() or similar,
  this avoids unnecessary rendering of child components due to the changed callback reference.

  import React, { useCallback } from 'react'
  import { useDispatch } from 'react-redux'

  export const CounterComponent = ({ value }) => {
    const dispatch = useDispatch()
    const incrementCounter = useCallback(
      () => dispatch({ type: 'increment-counter' }),
      [dispatch]
    )

    return (
      <div>
        <span>{value}</span>
        <MyIncrementButton onIncrement={incrementCounter} />
      </div>
    )
  }

  export const MyIncrementButton = React.memo(({ onIncrement }) => (
    <button onClick={onIncrement}>Increment counter</button>
  ))

  #####


  The dispatch function reference will be stable as long as the same store instance is being passed to the <Provider>.
  Normally, that store instance never changes in an application.

  However, the React hooks lint rules do not know that dispatch should be stable,
  and will warn that the dispatch variable should be added to dependency arrays for useEffect and useCallback.
  The simplest solution is to do just that:

  export const Todos = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchTodos())
      // Safe to add dispatch to the dependencies array
    }, [dispatch])
  }

  */

  useEffect(() => {
    const fetchStops = async () => {
      try {
        const resp = await fetch('http://mock-api-url/stops', {
          method: 'GET',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'applications/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
          }
        })
        console.log('stops resp', resp)
        const data = await resp.json();
        console.log('stops data', data)
        // setStops(data)
        fetchStops();
      } catch (error) {
        console.error(error);
      }
    }
    fetchStops();
  }, [])
  /*
  The corresponding Redux action will be dispatched to the store
  The user slice reducer will see the actions and update its state
  The component will see the new state value from the store and re-render itself with the new data
  */
  const handleStopSelection = (selection) => {
    setIsStopSelected(true);
    dispatch(setSelectedStop(selection));
  }

  return (
    <div className="dropdown-menu">
      <select data-testid="stop-element" onChange={e => handleStopSelection(e.target.value)}>
        {
          stops.map((stop, idx) => {
            return (
              <option value={stop} key={idx}> {stop} </option>
            );
          })
        }
      </select>
    </div>
  );
}

export default StopSelection;
