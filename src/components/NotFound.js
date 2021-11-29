/* 404 page */
// make sure you practice adding an image in here -> storage it in an Azure blob
import React from 'react';
import '../styles/NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <p className="not-found"> placeholder text </p>
      <Link to="/"> Return to home screen </Link>
    </>
  );
}

export default NotFound;
