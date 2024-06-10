import React, { useState } from 'react';
import './Archive.css';
import FilterLogo from './assets/FilterLogo.png';

const dummyData = [
    { id: 'Batch 101', name: 'Centra 1', steps: [{ details: { weight: '100kg' } }, {}, {}, {}, {}, { completed: true }] },
    { id: 'Batch 202', name: 'Centra 2', steps: [{ details: { weight: '200kg' } }, {}, {}, {}, {}, { completed: false }] },
    { id: 'Batch 203', name: 'Centra 3', steps: [{ details: { weight: '150kg' } }, {}, {}, {}, {}, { completed: true }] },
    { id: 'Batch 104', name: 'Centra 4', steps: [{ details: { weight: '150kg' } }, {}, {}, {}, {}, { completed: true }] },
    { id: 'Batch 505', name: 'Centra 5', steps: [{ details: { weight: '150kg' } }, {}, {}, {}, {}, { completed: true }] },
    { id: 'Batch 406', name: 'Centra 6', steps: [{ details: { weight: '150kg' } }, {}, {}, {}, {}, { completed: true }] },
    { id: 'Batch 507', name: 'Centra 7', steps: [{ details: { weight: '150kg' } }, {}, {}, {}, {}, { completed: true }] },
    { id: 'Batch 108', name: 'Centra 8', steps: [{ details: { weight: '150kg' } }, {}, {}, {}, {}, { completed: true }] },
];

function Archive() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = dummyData.filter(batch => 
        batch.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        batch.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="archive-content">
            <div className="header">
                <h2 className="Historytitle">History</h2>
            </div>
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Search by Batch ID or Centra" 
                    value={searchQuery} 
                    onChange={handleSearchChange} 
                />
            <div className="icon-container">
            <img src={FilterLogo} alt="Filter" className="icon" />
            </div>    
            </div>
            <table className="history-table">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Centra</th>
                        <th>Shipment Status</th>
                        <th>Weight</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((batch, index) => (
                        <tr key={index}>
                            <td>{batch.id}</td>
                            <td>{batch.name}</td>
                            <td>{batch.steps[5].completed ? 'Completed' : 'In Progress'}</td>
                            <td>{batch.steps[0].details ? batch.steps[0].details.weight : 'N/A'}</td>
                            <td>Notes here</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <span>Showing {filteredData.length} out of {dummyData.length}</span>
                <div className="page-controls">
                    <span>Previous</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>Next</span>
                </div>
            </div>
        </div>
    );
}

export default Archive;
