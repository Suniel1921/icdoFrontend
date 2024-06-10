import React from 'react';

const Loader = () => {
  const loaderContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Horizontal centering
    alignItems: 'center', // Vertical centering
    height: '70vh', // Fill the height of the parent
  };

  const customLoaderStyle = {
    width: '50px',
    height: '50px',
    background: `
      radial-gradient(farthest-side, #766DF4 92%, #0000) 50% 0,
      radial-gradient(farthest-side, #766DF4 92%, #0000) 50% 100%,
      radial-gradient(farthest-side, #766DF4 92%, #0000) 100% 50%,
      radial-gradient(farthest-side, #766DF4 92%, #0000) 0 50%
    `,
    backgroundSize: '12px 12px',
    backgroundRepeat: 'no-repeat',
    animation: 'spin 1s infinite'
  };

  return (
    <div style={loaderContainerStyle}>
      <div style={customLoaderStyle}></div>
    </div>
  );
};

export default Loader;
