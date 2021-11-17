import React, { useState } from 'react';
import '../styles/DropdownMenu.css';

const StopSelection = () => {
  const [stops, setStops] = useState(['Select stop', 'mock stop 1', 'mock stop 2']);
  return (
    <div className="dropdown-menu">
      <select>
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
