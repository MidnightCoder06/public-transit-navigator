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

  return (
    <>
      <h3 className="App-title"> Real-time Bay Area Departures </h3>
      <TransportationModeSelection setIsTransportationModeSelected={setIsTransportationModeSelected} />
      {isTransportationModeSelected ? <DirectionSelection setIsDirectionSelected={setIsDirectionSelected} /> : ''}
      {isDirectionSelected ? <StopSelection setIsStopSelected={setIsStopSelected} /> : ''}
      {isStopSelected ? <RouteOptions /> : ''}
    </>
  );
}

export default HomePage;
