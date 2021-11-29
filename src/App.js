import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <HomePage /> } />
        <Route path="/404" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
