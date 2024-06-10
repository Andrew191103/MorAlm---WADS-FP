import React from 'react';

const PackageActions = ({ pkg, showDropdown, setShowDropdown, updateStatus, deletePackage }) => {
  return (
    <div className="PackageActions">
      <div className="ellipsis" onClick={() => setShowDropdown(showDropdown === pkg.Package_ID ? null : pkg.Package_ID)}>⋮</div>
      {showDropdown === pkg.Package_ID && (
        <div className="dropdown-menu">
          {pkg.Status !== 'Cancelled' && <button onClick={() => updateStatus(pkg.Package_ID, 'Cancelled')}>Cancel</button>}
          <button onClick={() => deletePackage(pkg.Package_ID)}>Delete Package</button>
        </div>
      )}
    </div>
  );
};

export default PackageActions;
