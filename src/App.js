import React, { useState } from 'react';
import './App.css';
import TransportationModeSelection from './components/TransportationModeSelection';
import DirectionSelection from './components/DirectionSelection';
import StopSelection from './components/StopSelection';
import RouteOptions from './components/RouteOptions';

function App() {
  // control when the next element appears
  const [isRouteSelected, setIsRouteSelected] = useState(false);
  const [isDirectionSelected, setIsDirectionSelected] = useState(false);
  const [isStopSelected, setIsStopSelected] = useState(false);

  // store the selection data
  const [selectedRoute, setSelectedRoute] = useState('');
  const [selectedDirection, setDirectionSelected] = useState('');
  const [selectedStop, setSelectedStop] = useState('');

  /* once you add redux then change this so that a button needs to be clicked to generate the route options */
  return (
    <div className="App">
      <h3 className="App-title"> Real-time Bay Area Departures </h3>
      <TransportationModeSelection setSelectedRoute={setSelectedRoute} setIsRouteSelected={setIsRouteSelected} />
      {isRouteSelected ? <DirectionSelection setDirectionSelected={setDirectionSelected} setIsDirectionSelected={setIsDirectionSelected} /> : ''}
      {isDirectionSelected ? <StopSelection setSelectedStop={setSelectedStop} setIsStopSelected={setIsStopSelected} /> : ''}
      {isStopSelected ? <RouteOptions selectedRoute={selectedRoute} selectedDirection={selectedDirection} selectedStop={selectedStop} /> : ''}
    </div>
  );
}

export default App;
