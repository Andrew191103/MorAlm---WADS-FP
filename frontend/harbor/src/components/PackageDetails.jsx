import React from 'react';
import StatusButton from './StatusButton'; // Ensure this import is correct

const formatDateTime = (dateTime) => {
  const date = new Date(dateTime);
  return date.toLocaleString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};

const PackageDetails = ({ pkg, getSenderName, getWeight, updateStatus }) => {
  const packageId = pkg.Package_ID; // Make sure Package_ID is correctly passed
  return (
    <>
      <div className='column'>
        <p><strong>Package ID -</strong> {pkg.Package_ID}</p>
        <hr className='separator-line'></hr>
        <p>&nbsp;</p>
        <p><strong className="underlined">Sender</strong></p>
        <p>{getSenderName(packageId)}</p>
        <p>&nbsp;</p>
        <p><strong>Status - </strong> <span className={pkg.Status.toLowerCase()}>{pkg.Status}</span></p>
      </div>
      <div className='column'>
        <p><strong>Order Time -</strong> {formatDateTime(pkg.InDeliveryTime)}</p>
        <hr className='separator-line'></hr>
        <p>&nbsp;</p>
        <p><strong className="underlined">Weight</strong></p>
        <p>{getWeight(packageId)}</p>
        <p>&nbsp;</p>
        <p><strong className="underlined">Expedition</strong></p>
        <p>{pkg.ExpeditionType}</p>
        {pkg.Status === 'Pending' && (
          <button className="statsbutton" onClick={() => updateStatus(pkg.Package_ID, 'Arrived in Harbor')}>Arrived in Harbor</button>
        )}
        {pkg.Status === 'Arrived in Harbor' && <p className="waiting-pickup">Waiting for pickup</p>}
        {pkg.Status === 'Received by XYZ' && <p className="received-date">Package received - {formatDateTime(pkg.OutDeliveryTime)}</p>}
      </div>
    </>
  );
};

export default PackageDetails;
