import React, { useState, useEffect } from 'react';
import '../styles/DropdownMenu.css';

const StopSelection = (props) => {
  const { setSelectedStop, setIsStopSelected } = props;
  const [stops, setStops] = useState(['Select stop', 'mock stop 1', 'mock stop 2']);

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

  const handleStopSelection = (selection) => {
    setIsStopSelected(true);
    setSelectedStop(selection);
  }

  return (
    <div className="dropdown-menu">
      <select onChange={e => handleStopSelection(e.target.value)}>
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
