import React from 'react';

const Loader = ({ color = 'text-primary' }: { color: string }) => {
  return (
    <div className={`spinner-border ${color}`} role='status'>
      <span className='visually-hidden'>Loading...</span>
    </div>
  );
};

export default Loader;
