import React from 'react';
import PackageDetails from './PackageDetails';
import PackageActions from './PackageActions';
import StatusButton from './StatusButton';

const PackageList = ({ pkg, showDropdown, setShowDropdown, updateStatus, deletePackage, getSenderName, getWeight }) => {
  return (
    <div className='PackageList' key={pkg.Package_ID}>
      <PackageActions
        pkg={pkg}
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
        updateStatus={updateStatus}
        deletePackage={deletePackage}
      />
      <PackageDetails pkg={pkg} getSenderName={getSenderName} getWeight={getWeight} updateStatus={updateStatus} />
      <StatusButton pkg={pkg} updateStatus={updateStatus} />
    </div>
  );
};

export default PackageList;
