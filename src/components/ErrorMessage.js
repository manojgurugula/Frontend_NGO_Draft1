import React from 'react';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="message error" style={{
      textAlign: 'center',
      padding: '2rem',
      margin: '2rem auto',
      maxWidth: '500px'
    }}>
      <h3>Something went wrong</h3>
      <p>{message}</p>
      {onRetry && (
        <button 
          onClick={onRetry} 
          className="btn btn-primary"
          style={{ marginTop: '1rem' }}
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;