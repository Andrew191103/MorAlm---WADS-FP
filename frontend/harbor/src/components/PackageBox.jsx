import React from 'react';
import PackageList from './PackageList';

const PackageBox = ({ filteredPackages, showDropdown, setShowDropdown, updateStatus, deletePackage, getSenderName, getWeight }) => {
  return (
    <div className='PackageBox'>
      {filteredPackages.map(pkg => (
        <PackageList
          key={pkg.Package_ID}
          pkg={pkg}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
          updateStatus={updateStatus}
          deletePackage={deletePackage}
          getSenderName={getSenderName}
          getWeight={getWeight}
        />
      ))}
    </div>
  );
};

export default PackageBox;
