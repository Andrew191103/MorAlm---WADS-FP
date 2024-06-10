import React from 'react';


const StatusButton = ({ pkg, updateStatus }) => {
  if (pkg.Status === 'Pending') {
    return <button className="statsbutton" onClick={() => updateStatus(pkg.Package_ID, 'Arrived in Harbor')}>Arrived in Harbor</button>;
  } else if (pkg.Status === 'Arrived in Harbor') {
    return <p className="waiting-pickup">Waiting for pickup</p>;
  } else if (pkg.Status === 'Received by XYZ') {
    return <p className="received-date"></p>;
  }
  return null;
};

export default StatusButton;
