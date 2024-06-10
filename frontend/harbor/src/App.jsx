import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Filter from './components/Filter';
import PackageBox from './components/PackageBox';
import { getDeliveries, getCentra, getBatches, updateDelivery, deleteDelivery } from './apiService';

function App() {
  const [packages, setPackages] = useState([]);
  const [centra, setCentra] = useState([]);
  const [batches, setBatches] = useState([]);
  const [filter, setFilter] = useState('all');
  const [showDropdown, setShowDropdown] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      const deliveryData = await getDeliveries();
      const centraData = await getCentra();
      const batchData = await getBatches();
      setPackages(deliveryData);
      setCentra(centraData);
      setBatches(batchData);

      // Log the fetched data
      console.log('Deliveries:', deliveryData);
      console.log('Centra:', centraData);
      console.log('Batches:', batchData);
    };
    fetchPackages();
  }, []);

  const getSenderName = (packageId) => {
    const batch = batches.find(b => b.Package_ID === packageId);
    if (!batch) {
      console.log(`No batch found for package ID: ${packageId}`);
      return 'Unknown';
    }
    const centraEntry = centra.find(c => c.Centra_ID === batch.Centra_ID);
    if (!centraEntry) {
      console.log(`No centra found for centra ID: ${batch.Centra_ID}`);
      return 'Unknown';
    }
    return centraEntry.CentraName;
  };

  const getWeight = (packageId) => {
    const batch = batches.find(b => b.Package_ID === packageId);
    if (!batch) {
      console.log(`No batch found for package ID: ${packageId}`);
      return 'Unknown';
    }
    return `${batch.PowderWeight} kg`; // Convert weight to kg
  };

  const filteredPackages = packages.filter(pkg => {
    if (filter === 'all') {
      return true;
    } else {
      return pkg.Status && pkg.Status.toLowerCase() === filter.toLowerCase();
    }
  });

  const updateStatus = async (id, newStatus) => {
    const currentDateTime = new Date().toISOString();
    let updatedPackage;
    if (newStatus === 'Arrived in Harbor' || newStatus === 'Received by XYZ') {
      updatedPackage = await updateDelivery(id, { Status: newStatus, OutDeliveryTime: currentDateTime });
    } else {
      updatedPackage = await updateDelivery(id, { Status: newStatus });
    }
    setPackages(packages.map(pkg => (pkg.Package_ID === id ? updatedPackage : pkg)));
  };

  const deletePackage = async (id) => {
    await deleteDelivery(id);
    setPackages(packages.filter(pkg => pkg.Package_ID !== id));
  };

  return (
    <div className="App">
      <Header />
      <div className='ShipmentTracking'>Shipment Tracking</div>
      <div className='filterbox'>
        <Filter packages={packages} setFilter={setFilter} />
      </div>
      <div className='Box'>
        <PackageBox
          filteredPackages={filteredPackages}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
          updateStatus={updateStatus}
          deletePackage={deletePackage}
          getSenderName={getSenderName}
          getWeight={getWeight}
        />
      </div>
    </div>
  );
}

export default App;
