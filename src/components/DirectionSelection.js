import React, { useState } from 'react';
import '../styles/DropdownMenu.css';

const DirectionSelection = (props) => {
  const { setDirectionSelected } = props;
  const [directions, setDirections] = useState(['Select direction', 'Northbound', 'Southbound']);

  const handleDirectionSelection = () => {
    setDirectionSelected(true);
  }

  return (
    <div className="dropdown-menu">
      <select onChange={handleDirectionSelection}>
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
