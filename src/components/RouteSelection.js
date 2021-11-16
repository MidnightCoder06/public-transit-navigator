import React, { useState }  from 'react';

const RouteSelection = () => {
  const [routes, setRoutes] = useState(['mock route 1', 'mock route 2', 'mock route 3']);
  return (
    <div>
      <select>
      {
        routes.map(route => {
          return(
            <>
              <option value={route}> {route} </option>
            </>
          );
        })
      }
      </select>

    </div>
  );
}

export default RouteSelection;
