import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './batchprogress.css';
import Modal from './Modal';

function createSteps() {
    return [
        { step: 'Wet Leaves', completed: false, details: {weight: 0} },
        { step: 'Dry Leaves', completed: false, details: {weight: 0} },
        { step: 'Flour Leaves', completed: false, details: {weight: 0} },
        { step: 'Deliver', completed: false, details: {} }
    ];
}

function createCentras() {
    const centras = [];
    for (let i = 1; i <= 10; i++) {
        centras.push({
            batches: [
                { id: i * 100 + 1, name: `Batch 1`, steps: createSteps(), date: '20-05-2024', startTime: '10:00 AM' },
                { id: i * 100 + 2, name: `Batch 2`, steps: createSteps(), date: '24-05-2024', startTime: '11:59 AM' },
                { id: i * 100 + 3, name: `Batch 3`, steps: createSteps(), date: '22-05-2024', startTime: '12:00 PM' },
                { id: i * 100 + 4, name: `Batch 4`, steps: createSteps(), date: '22-05-2024', startTime: '12:00 PM' },
            ]
        });
    }
    return centras;
}

function BatchProgress() {
    const [centras, setCentras] = useState(createCentras());
    const [activeCentraIndex, setActiveCentraIndex] = useState(0);
    const [modalActive, setModalActive] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [onConfirm, setOnConfirm] = useState(null);
    const [headerContent, setHeaderContent] = useState('');
    const [buttonLabel, setButtonLabel] = useState('Confirm');
    const [modalStep, setModalStep] = useState(null);
    const [modalBatch, setModalBatch] = useState(null);
    const [showSecondModal, setShowSecondModal] = useState(false);

    const handleStepClick = (batchId, stepIndex, step) => {
        console.log("Step clicked:", step.step);
        if (stepIndex > 0 && !centras[activeCentraIndex].batches.find(b => b.id === batchId).steps[stepIndex - 1].completed) {
            alert('Please complete the previous steps first.');
            return;
        }

        let header = '';
        let buttonLabel = 'Confirm';
        
        if (stepIndex === 0 || stepIndex === 1 || stepIndex === 2 || stepIndex === 3) {
            header = (
                <span className="title-modal">
                    {stepIndex === 0 && 'Wet Leaves'}
                    {stepIndex === 1 && 'Dry Leaves'}
                    {stepIndex === 2 && 'Flour / Powder Record'}
                    {stepIndex === 3 && 'Deliver to XYZ'}
                </span>
            );
        
            if (stepIndex === 3) {
                buttonLabel = 'Deliver';
            }
        }        

        setModalContent(stepIndex === 0 || stepIndex === 1 || stepIndex === 2 || stepIndex === 3);
        setHeaderContent(header);
        setOnConfirm(() => (data) => completeStep(batchId, stepIndex, parseFloat(data)));
        setModalActive(true);
        setButtonLabel(buttonLabel);
        setModalStep(stepIndex);
        setModalBatch(centras[activeCentraIndex].batches.find(b => b.id === batchId));
    };

    const completeStep = (batchId, stepIndex, weight) => {
        if (stepIndex === 1) {
            setModalActive(false);
            setModalStep('showRecord');
            setShowSecondModal(true);
            return;
        }

        if (stepIndex === 'showRecord') {
            stepIndex = 1;
        }       

        const newCentras = centras.map((centra, idx) => {
            if (idx === activeCentraIndex) {
                const newBatches = centra.batches.map(batch => {
                    if (batch.id === batchId) {
                        const newSteps = batch.steps.map((step, idx) => {
                            if (idx === stepIndex) {
                                return { ...step, completed: true, details: { ...step.details, weight } };
                            }
                            return step;
                        });
                        return { ...batch, steps: newSteps };
                    }
                    return batch;
                });
                return { ...centra, batches: newBatches };
            }
            return centra;
        });

        setCentras(newCentras);
        setModalActive(false);
        setShowSecondModal(false);
    };

    return (
        <div className="container">
            <Link to="/" className="back-button">&#60;</Link>            
            <div className="content">
                <h2 className="BP-title">Centra [Location]</h2>
                <div className="title-header">
                    <div className="column-header">Name</div>
                    <div className="column-header">Date</div>
                    <div className="column-header">Time</div>
                </div>
                <Routes>
                    <Route path="/" element={
                        centras[activeCentraIndex].batches.map(batch => (
                            <div key={batch.id} className="batch-row">
                                <div className="batch-title">
                                <div className="column-header">{batch.name}</div>
                                <div className="column-header">{batch.date}</div>
                                <div className="column-header">{batch.startTime}</div>                                    
                            </div>
                                <div className="batch-content">
                                    {batch.steps.map((step, index) => (
                                        <div key={index} className={`step-container ${step.completed ? 'completed' : ''}`}
                                             onClick={() => handleStepClick(batch.id, index, step)}>
                                            <div className="step-circle">{index + 1}</div>
                                            <div className="step-name">{step.step}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    } />
                </Routes>
            </div>
            <Modal
                isActive={modalActive}
                onClose={() => setModalActive(false)}
                content={modalContent}
                onConfirm={onConfirm}
                headerContent={headerContent}
                buttonLabel={buttonLabel}
                step={modalStep}
                batch={modalBatch}
            />
            {showSecondModal && (
                <Modal
                    isActive={showSecondModal}
                    onClose={() => setShowSecondModal(false)}
                    onConfirm={() => completeStep(modalBatch.id, 'showRecord', modalBatch.steps[1].details.weight)}
                    headerContent={<span className="title-modal">Wash & Dry Record </span>}
                    buttonLabel="Confirm"
                    step="showRecord"
                    batch={modalBatch}
                />
            )}            
        </div>
    );
}

export default BatchProgress;
