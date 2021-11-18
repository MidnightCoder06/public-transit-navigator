import React, { useState } from 'react';
import '../styles/DropdownMenu.css';

const StopSelection = (props) => {
  const { setStopSelected } = props;
  const [stops, setStops] = useState(['Select stop', 'mock stop 1', 'mock stop 2']);

  const handleStopSelection = () => {
    setStopSelected(true);
  }

  return (
    <div className="dropdown-menu">
      <select onChange={handleStopSelection}>
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
