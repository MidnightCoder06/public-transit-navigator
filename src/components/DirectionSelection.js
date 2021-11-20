import React, { useState } from 'react';
import '../styles/DropdownMenu.css';

const DirectionSelection = (props) => {
  const { setDirectionSelected, setIsDirectionSelected } = props;
  const [directions, setDirections] = useState(['Select direction', 'Northbound', 'Southbound']);

  const handleDirectionSelection = (selection) => {
    setIsDirectionSelected(true);
    setDirectionSelected(selection);
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
