import React from 'react';

const LoadingSpinner = ({ message = 'Loading...' }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <div className="loading-spinner"></div>
      <p style={{ marginTop: '1rem', color: '#666' }}>{message}</p>
    </div>
  );
};

export default LoadingSpinner;