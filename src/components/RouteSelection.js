import React, { useState }  from 'react';
import '../styles/DropdownMenu.css';

const RouteSelection = (props) => {
  const { setRouteSelected } = props;
  const [routes, setRoutes] = useState(['Select route', 'mock route 1', 'mock route 2']);

  const handleRouteSelection = () => {
    setRouteSelected(true);
  }

  return (
    <div className="dropdown-menu">
      <select onChange={handleRouteSelection}>
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
