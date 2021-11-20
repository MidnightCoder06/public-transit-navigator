import React from 'react'
import '../styles/ErrorText.css'

/* This is to be displayed on the direction component if you try
    to go North and you're already as North as you get based on mode of transportation 
    or you asked go South and you're already as South as you get based on mode of transportation   */
const ErrorText = (props) => {
  const { text } = props;

  return (
    <p className="error-text">
      { text }
    </p>
  );
}

export default ErrorText;
