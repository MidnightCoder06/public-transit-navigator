import React, { useState }  from 'react';
import '../styles/DropdownMenu.css';

const TransportationModeSelection = (props) => {
  const { setSelectedTransportationMode, setIsTransportationModeSelected } = props;
  const [transportationOptions, setTransportationOptions] = useState(['Select method of transportation', 'Bus', 'Caltrain', 'BART', 'Muni']);

  const handleTransportationModeSelection = (selection) => {
    setIsTransportationModeSelected(true);
    setSelectedTransportationMode(selection);
  }

  return (
    <div className="dropdown-menu">
      <select onChange={e => handleTransportationModeSelection(e.target.value)}>
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
