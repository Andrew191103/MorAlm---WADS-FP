import React, { useState, useEffect } from 'react';
import './modal.css';

const Modal = ({ isActive, onClose, content, onConfirm, headerContent, buttonLabel, step, batch }) => {
    const [weight, setWeight] = useState('');
    const [record, setRecord] = useState('');
    const [assignedDate, setAssignedDate] = useState('');

    const handleDateChange = (e) => {
        setAssignedDate(e.target.value);
    };

    const handleConfirm = () => {
        if (step === 0 || step === 1 || step === 'showRecord' || step === 2) {
            if (step === 0 || step === 1|| step === 2) {
                onConfirm(weight);
                setWeight('');
                return;
            }
            if (step === 'showRecord') {
                onConfirm(record);
                setRecord('');
                return;
            }
        } else {
            onConfirm();
        }
    };

    useEffect(() => {
        if (!isActive) {
            setWeight('');
            setRecord('');
            setAssignedDate('');
        }
    }, [isActive]);

    if (!isActive) return null;

const calculateETA = () => {
    if (!assignedDate) return '';
    const etaDate = new Date(assignedDate);
    etaDate.setDate(etaDate.getDate() + 5);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return etaDate.toLocaleDateString(undefined, options);
};

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {headerContent && <div className="modal-header">{headerContent}</div>}
                <div className="modal-body">
                    {step === 0 && (
                        <div className="modal-field">                            
                            <label className="modal-label">Weight after wash</label>
                            <input
                                type="number"
                                value={weight}
                                min={0}
                                onChange={(e) => setWeight(e.target.value)}
                                placeholder="kg"

                            />
                        </div>
                    )}
                    {step === 1 && (
                        <div className="modal-field">                            
                            <label className="modal-label">Weight after dry</label>
                            <input
                                type="number"
                                value={weight}
                                min={0}
                                onChange={(e) => setWeight(e.target.value)}
                                placeholder="kg"

                            />
                        </div>
                    )}
                    {step === 2 && (
                     <>
                        <div className="modal-field">                            
                            <label className="modal-label">Final powder weight</label>
                            <input
                                type="number"
                                value={weight}
                                min={0}
                                onChange={(e) => setWeight(e.target.value)}
                                placeholder="kg"
                            />
                        </div>
                        <div className="modal-field">                            
                            <label className="modal-label">Date obtained</label>
                            <input type="date" />
                        </div>
                        </>                                          
                    )}
                    {step === 3 && (
                        <>
                            <div className="modal-fieldWnD">
                                <label className="modal-label">Batch ID</label>
                                <span>{batch.id}</span>
                            </div>
                            <div className="modal-field">
                                <label className="modal-label">Assigned Date</label>
                                <input 
                                type="date"
                                value={assignedDate}
                                onChange={handleDateChange} 
                                />
                            </div>
                            <div className="modal-fieldWnD">
                                <label className="modal-label">Weight</label>
                                <p>{batch.steps[2].details.weight} kg</p>
                            </div>      
                            <div className="modal-field">
                                <label className="modal-label">Expedition</label>
                                <select>
\                                    <option value="expedition1">Expedition 1</option>
                                    <option value="expedition2">Expedition 2</option>
                                </select>                            
                                </div>
                            <div className="modal-fieldWnD">
                                <label className="modal-label">ETA</label>
                                <p>{calculateETA()}</p>
                            </div>
                            <div className="modal-field">
                                <label className="modal-label">Expiry Date</label>
                                <input type="date" />
                            </div>                        
                            {/* <table className="delivery-table">
                                <thead>
                                    <tr>
                                        <th>Batch ID</th>
                                        <th>Assigned Date</th>
                                        <th>Weight</th>
                                        <th>Expedition</th>
                                        <th>ETA</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...Array(3)].map((_, index) => (
                                        <tr key={index}>
                                            <td>999</td>
                                            <td>17-07-2024</td>
                                            <td>5 KG</td>
                                            <td>
                                                <select>
                                                    <option value="">Select</option>
                                                    <option value="expedition1">Expedition 1</option>
                                                    <option value="expedition2">Expedition 2</option>
                                                </select>
                                            </td>
                                            <td>18-07-2024</td>
                                            <td>
                                                <button className="deliver-button">Deliver</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table> */}
                        </>
                    )}
                    {step === 'showRecord' && batch && (
                        <>
                            <div className="modal-fieldWnD">
                                <label className="modal-label">Batch Number</label>
                                <span>{batch.name}</span>
                            </div>
                            <div className="modal-fieldWnD">
                                <label className="modal-label">Batch Date</label>
                                <span>{batch.date}</span>
                            </div>
                            <div className="modal-fieldWnD">
                                <label className="modal-label">Batch Started On</label>
                                <span>{batch.startTime}</span>
                            </div>      
                            <div className="modal-fieldWnD">
                                <label className="modal-label">Batch Ended on</label>
                                <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                            </div>
                            <div className="modal-fieldWnD">
                                <label className="modal-label">Total Weight</label>
                                <p>{batch.steps[0].details.weight + batch.steps[1].details.weight} kg</p>
                            </div>
                            <div className="modal-field">
                                <label className="modal-label">Expiry Date</label>
                                <input type="date" />
                            </div>
                        </>
                    )}
                    {content && <div className="modal-text">{content}</div>}
                </div>
                <div className="modal-footer">
                    <button onClick={onClose} className="close">Close</button>
                    <button onClick={handleConfirm} className="confirm-button">{buttonLabel}</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
