import React, { useState, useEffect }  from 'react';
import '../styles/DropdownMenu.css';

const RouteSelection = (props) => {
  const { setSelectedRoute, setIsRouteSelected } = props;
  const [routes, setRoutes] = useState(['Select route', 'mock route 1', 'mock route 2']);

  useEffect(() => {
      const fetchRoutines = async () => {
        try {
          const resp = await fetch('http://mock-api-url/routes', {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'applications/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': 'true',
              'Access-Control-Allow-Methods': 'GET',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            }
          });
          console.log('routes resp', resp)
          const data = await resp.json();
          console.log('routes data', data)
          // setRoutes(data)
        } catch (err) {
        console.error(err)
      }
    }
    fetchRoutines();
  }, []);


  const handleRouteSelection = (selection) => {
    setIsRouteSelected(true);
    setSelectedRoute(selection);
  }

  return (
    <div className="dropdown-menu">
      <select onChange={e => handleRouteSelection(e.target.value)}>
      {
        routes.map((route, idx) => {
          return (
            <option value={route} key={idx}> {route} </option>
          );
        })
      }
      </select>
    </div>
  );
}

export default RouteSelection;
