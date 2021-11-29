/* 404 page */
import React from 'react';
import '../styles/NotFound.css';
import { Link } from 'react-router-dom';

// TODO: make sure you practice adding an image in here -> storage it in an Azure blob
const NotFound = () => {
  return (
    <>
      <p className="not-found"> Resource Not Found </p>
      <Link to="/"> Return to home screen </Link>
    </>
  );
}

export default NotFound;
