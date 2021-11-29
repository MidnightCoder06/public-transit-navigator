import React, { useState } from 'react';
import '../styles/Home.css';

import TransportationModeSelection from './TransportationModeSelection';
import DirectionSelection from './DirectionSelection';
import StopSelection from './StopSelection';
import RouteOptions from './RouteOptions';


const HomePage = () => {
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
    <>
      <h3 className="App-title"> Real-time Bay Area Departures </h3>
      <TransportationModeSelection setSelectedTransportationMode={setSelectedTransportationMode} setIsTransportationModeSelected={setIsTransportationModeSelected} />
      {isTransportationModeSelected ? <DirectionSelection setDirectionSelected={setDirectionSelected} setIsDirectionSelected={setIsDirectionSelected} /> : ''}
      {isDirectionSelected ? <StopSelection setSelectedStop={setSelectedStop} setIsStopSelected={setIsStopSelected} /> : ''}
      {isStopSelected ? <RouteOptions selectedTransportationMode={selectedTransportationMode} selectedDirection={selectedDirection} selectedStop={selectedStop} /> : ''}
    </>
  );
}

export default HomePage;
