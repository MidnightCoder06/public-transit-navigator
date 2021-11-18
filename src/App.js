import React, { useState } from 'react';
import './App.css';
import RouteSelection from './components/RouteSelection';
import DirectionSelectionn from './components/DirectionSelection';
import StopSelection from './components/StopSelection';
import RouteOptions from './components/RouteOptions';

function App() {
  // control when the next element appears
  const [routeSelected, setRouteSelected] = useState(false);
  const [directionSelected, setDirectionSelected] = useState(false);
  const [stopSelected, setStopSelected] = useState(false);

  return (
    <div className="App">
      <h3 className="App-title"> Real-time Departures </h3>
      <RouteSelection setRouteSelected={setRouteSelected} />
      {routeSelected ? <DirectionSelectionn setDirectionSelected={setDirectionSelected}  /> : ''}
      {directionSelected ? <StopSelection setStopSelected={setStopSelected} /> : ''}
      {stopSelected ? <RouteOptions /> : ''}
    </div>
  );
}

export default App;
