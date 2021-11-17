import React, { useState } from 'react';

const DirectionSelection = (props) => {
  const { setDirectionSelected } = props;
  const [directions, setDirections] = useState(['Select direction', 'Northbound', 'Southbound']);

  const handleDirectionSelection = () => {
    setDirectionSelected(true);
  }

  return (
    <div>
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
