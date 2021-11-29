import React, { useState } from 'react';
import '../styles/DropdownMenu.css';

import { useDispatch } from 'react-redux';
import { setDirectionSelectedX } from '../features/userSlice';
/*
Now we can use the React Redux hooks to let React components interact with the Redux store.
We can read data from the store with useSelector, and dispatch actions using useDispatch.
*/

/*
Use the React Redux useSelector/useDispatch hooks in React components
Read data from the store with the useSelector hook
Get the dispatch function with the useDispatch hook, and dispatch actions as needed
*/
const DirectionSelection = (props) => {
  const { setDirectionSelected, setIsDirectionSelected } = props;
  const [directions, setDirections] = useState(['Select direction', 'Northbound', 'Southbound']);

  const dispatch = useDispatch()
  /*
  The corresponding Redux action will be dispatched to the store
  The user slice reducer will see the actions and update its state
  The component will see the new state value from the store and re-render itself with the new data
  */
  const handleDirectionSelection = (selection) => {
    setIsDirectionSelected(true);
    setDirectionSelected(selection);
    dispatch(setDirectionSelectedX(selection));
  }

  return (
    <div className="dropdown-menu">
      <select data-testid="direction-element" onChange={e => handleDirectionSelection(e.target.value)}>
        {
          directions.map((direction, idx) => {
            return (
              <option value={direction} key={idx}> {direction} </option>
            );
          })
        }
      </select>
    </div>
  );
}

export default DirectionSelection;
