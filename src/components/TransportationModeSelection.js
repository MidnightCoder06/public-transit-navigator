import React, { useState }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedTransportationModeX } from '../features/userSlice';
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
const TransportationModeSelection = (props) => {
  const { setSelectedTransportationMode, setIsTransportationModeSelected } = props;
  // TODO: we're not setting these here so it should just be a regular list
  const [transportationOptions, setTransportationOptions] = useState(['Select method of transportation', 'Bus', 'Caltrain', 'BART', 'Muni']);
  const dispatch = useDispatch()
  /*
  The corresponding Redux action will be dispatched to the store
  The user slice reducer will see the actions and update its state
  The component will see the new state value from the store and re-render itself with the new data
  */
  const handleTransportationModeSelection = (selection) => {
    setIsTransportationModeSelected(true);
    setSelectedTransportationMode(selection);
    dispatch(setSelectedTransportationModeX(selection));
  }

  return (
    <div className="dropdown-menu">
      <select data-testid="transportation-element" onChange={e => handleTransportationModeSelection(e.target.value)}>
      {
        transportationOptions.map((transportationOption, idx) => {
          return (
            <option value={transportationOption} key={idx}> {transportationOption} </option>
          );
        })
      }
      </select>
    </div>
  );
}

export default TransportationModeSelection;
