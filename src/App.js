import React, { useState } from 'react';
import './App.css';
import RouteSelection from './components/RouteSelection';
import DirectionSelectionn from './components/DirectionSelection';
import StopSelection from './components/StopSelection';

function App() {
  // control when the next dropdown appears
  const [routeSelected, setRouteSelected] = useState(false);
  const [directionSelected, setDirectionSelected] = useState(false);

  return (
    <div className="App">
      <RouteSelection setRouteSelected={setRouteSelected} />
      {routeSelected ? <DirectionSelectionn setDirectionSelected={setDirectionSelected}  /> : ''}
      {directionSelected ? <StopSelection /> : ''}
    </div>
  );
}

export default App;
