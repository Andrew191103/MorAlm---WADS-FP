import React from 'react';

const Filter = ({ packages, setFilter }) => {
  return (
    <div className='filter'>
      <button onClick={() => setFilter('all')}>
        <span className="button-text">All</span>
        <span className="button-count">{packages.length}</span>
      </button>
      <button onClick={() => setFilter('pending')}>
        <span className="button-text">Pending</span>
        <span className="button-count">{packages.filter(pkg => pkg.Status === 'Pending').length}</span>
      </button>
      <button onClick={() => setFilter('arrived in harbor')}>
        <span className="button-text">Arrived in Harbor</span>
        <span className="button-count">{packages.filter(pkg => pkg.Status === 'Arrived in Harbor').length}</span>
      </button>
      <button onClick={() => setFilter('received by xyz')}>
        <span className="button-text">Received by XYZ</span>
        <span className="button-count">{packages.filter(pkg => pkg.Status === 'Received by XYZ').length}</span>
      </button>
      <button onClick={() => setFilter('cancelled')}>
        <span className="button-text">Cancelled</span>
        <span className="button-count">{packages.filter(pkg => pkg.Status === 'Cancelled').length}</span>
      </button>
    </div>
  );
};

export default Filter;
