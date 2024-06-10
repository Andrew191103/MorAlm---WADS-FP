import React, { useState } from 'react';
import './Warehouse.css';

const WarehouseModal = ({ isActive, onClose, batches, onConfirm }) => {
    const [selectedBatches, setSelectedBatches] = useState([]);
    const [dropdownVisible, setDropdownVisible] = useState(null);

    if (!isActive) return null;

    const handleSelectBatch = (batchId) => {
        setSelectedBatches(prevSelected =>
            prevSelected.includes(batchId)
                ? prevSelected.filter(id => id !== batchId)
                : [...prevSelected, batchId]
        );
    };

    const handleSelectAll = () => {
        if (selectedBatches.length === batches.length) {
            setSelectedBatches([]);
        } else {
            setSelectedBatches(batches.map(batch => batch.id));
        }
    };

    const sendSelectedToWarehouse = () => {
        const remainingBatches = batches.filter(batch => !selectedBatches.includes(batch.id));
        onConfirm(selectedBatches);
        setSelectedBatches([]);
        return remainingBatches;
    };

    const toggleDropdown = (batchId) => {
        setDropdownVisible(dropdownVisible === batchId ? null : batchId);
    };

    const deleteBatch = (batchId) => {
        // Implement the logic for deleting a batch here
        console.log(`Delete batch with id: ${batchId}`);
        setDropdownVisible(null); // Close the dropdown after deletion
    };

    return (
        <div className="warehouse-modal-overlay" onClick={onClose}>
            <div className="warehouse-modal-content" onClick={e => e.stopPropagation()}>
                <div className="warehouse-modal-header">
                    <div className="warehouse-header-title">
                        <span className="AllPackageTitle">All Packages</span>
                        {batches.length > 0 && ( // Conditionally render the Select All checkbox
                            <span className="SelectAllCheckbox">
                                <input
                                    type="checkbox"
                                    className="warehouse-select-all-checkbox"
                                    checked={selectedBatches.length === batches.length}
                                    onChange={handleSelectAll}
                                    id="select-all-checkbox"
                                />
                                <label htmlFor="select-all-checkbox">Select All&nbsp;&nbsp;</label>
                            </span>
                        )}
                    </div>
                    <button className="warehouse-close-button" onClick={onClose}>&times;</button>
                </div>
                <div className="warehouse-modal-body">
                    {batches.length > 0 ? (
                        batches.map((batch) => (
                            <div key={batch.id} className={`warehouse-batch-item ${selectedBatches.includes(batch.id) ? 'selected' : ''}`}>
                                <input
                                    type="checkbox"
                                    checked={selectedBatches.includes(batch.id)}
                                    onChange={() => handleSelectBatch(batch.id)}
                                    id={`batch-${batch.id}`}
                                />
                                <label htmlFor={`batch-${batch.id}`}>{`Batch ${batch.id} Package`}</label>
                                <div className="dropdown-container">
                                    <button className={`dropdown-button ${selectedBatches.includes(batch.id) ? 'white' : ''}`} onClick={() => toggleDropdown(batch.id)}>⋮</button>
                                    {dropdownVisible === batch.id && (
                                        <div className="dropdown-menu">
                                            <button className="dropdown-item" onClick={() => deleteBatch(batch.id)}>Delete</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>There are no packages</p>
                    )}
                </div>
                <div className="warehouse-modal-footer">
                    {batches.length > 0 && ( // Conditionally render the Send to Warehouse button
                        <button className="warehouse-confirm-button" onClick={() => sendSelectedToWarehouse()}>Send to Warehouse</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WarehouseModal;
