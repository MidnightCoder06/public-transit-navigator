import React, { useState } from 'react';
import './App.css';
import RouteSelection from './components/RouteSelection';
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

  return (
    <div className="App">
      <h3 className="App-title"> Real-time Departures </h3>
      <RouteSelection setSelectedRoute={setSelectedRoute} setIsRouteSelected={setIsRouteSelected} />
      {isRouteSelected ? <DirectionSelection setDirectionSelected={setDirectionSelected} setIsDirectionSelected={setIsDirectionSelected} /> : ''}
      {isDirectionSelected ? <StopSelection setSelectedStop={setSelectedStop} setIsStopSelected={setIsStopSelected} /> : ''}
      {isStopSelected ? <RouteOptions selectedRoute={selectedRoute} selectedDirection={selectedDirection} selectedStop={selectedStop} /> : ''}
    </div>
  );
}

export default App;
