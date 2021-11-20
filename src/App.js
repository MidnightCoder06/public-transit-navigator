import React, { useState } from 'react';
import './App.css';
import TransportationModeSelection from './components/TransportationModeSelection';
import DirectionSelection from './components/DirectionSelection';
import StopSelection from './components/StopSelection';
import RouteOptions from './components/RouteOptions';

function App() {
  // control when the next element appears
  const [isTransportationModeSelected, setIsTransportationModeSelected] = useState(false);
  const [isDirectionSelected, setIsDirectionSelected] = useState(false);
  const [isStopSelected, setIsStopSelected] = useState(false);

  // store the selection data
  const [selectedTransportationMode, setSelectedTransportationMode] = useState('');
  const [selectedDirection, setDirectionSelected] = useState('');
  const [selectedStop, setSelectedStop] = useState('');

  /* once you add redux then change this so that a button needs to be clicked to generate the route options */
  return (
    <div className="App">
      <h3 className="App-title"> Real-time Bay Area Departures </h3>
      <TransportationModeSelection setSelectedTransportationMode={setSelectedTransportationMode} setIsTransportationModeSelected={setIsTransportationModeSelected} />
      {isTransportationModeSelected ? <DirectionSelection setDirectionSelected={setDirectionSelected} setIsDirectionSelected={setIsDirectionSelected} /> : ''}
      {isDirectionSelected ? <StopSelection setSelectedStop={setSelectedStop} setIsStopSelected={setIsStopSelected} /> : ''}
      {isStopSelected ? <RouteOptions selectedTransportationMode={selectedTransportationMode} selectedDirection={selectedDirection} selectedStop={selectedStop} /> : ''}
    </div>
  );
}

export default App;
