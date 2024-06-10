import './StepPopUp.css';
import React from 'react';

const StepPopUp = ({ batch, stepIndex, onClose, onConfirm }) => {
  const step = batch.steps[stepIndex];
  let confirmTitle = '';

  switch (stepIndex) {
    case 0:
      confirmTitle = 'Next';
      break;
    case 4:
      confirmTitle = 'Received'; 
      break;
    case 5:
      confirmTitle = 'Add to list'; 
      break;    
    default:
      confirmTitle = 'Confirm';
      break;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {/* <div className="modal-header">
        <button className="close-button" onClick={onClose}>&times;</button>
        </div> */}
        <div className="modal-body">
        <button className="close-button" onClick={onClose}>&times;</button>

        {stepIndex === 0 && (
            <div className="modal-field">
              <label className="modal-number">Verify the final weights</label>
            </div>
        )}
        {stepIndex === 1 && (
            <div className="modal-field">
              <label className="modal-label">Final wet leaves weight</label>
              <div className="modal-number">85 KG</div>
            </div>
        )}
        
        {stepIndex === 2 && (
            <div className="modal-field">
              <label className="modal-label">Final dry leaves weight</label>
              <div className="modal-number">17 KG</div>
            </div>
        )}
        
        {stepIndex === 3 && (
            <div className="modal-field">
              <label className="modal-label">Final powder weight</label>
              <div className="modal-number">19 KG</div>
            </div>
        )}

        {stepIndex === 4 && (
            <div className="modal-content">
              <div className="title-deliver">Package Details</div>
                <div className="modal-deliver">
                    <label className="modal-label">Package ID</label>
                    <span>{batch.id}</span>
                </div>
                <div className="modal-deliver">
                    <label className="modal-label">Order Time</label>
                    <span>10:59 AM</span>
                </div>
                <div className="modal-deliver">
                    <label className="modal-label">Sender</label>
                    <span>Jess</span>
                </div>      
                <div className="modal-deliver">
                    <label className="modal-label">Recipient</label>
                    <span>Edel</span>
                </div>
                <div className="modal-deliver">
                    <label className="modal-label">Expidition</label>
                    <span>Fast</span>
                </div>
                <div className="modal-deliver">
                    <label className="modal-label"> Weight</label>
                    <span>10 kg</span>
                </div>
                <div className="modal-deliver">
                    <label className="modal-label">Status</label>
                    <span>Delivered</span>
                </div>
            </div>
        )}

          {stepIndex === 5 && (
            <>
            <div className="modal-content">
              <div className="title-deliver">Reception</div>
              <div className="modal-deliver">
                    <label className="modal-label">Delivery ID</label>
                    <span>09822138383</span>
              </div>
              <div className="modal-deliver">
                  <label className="modal-label">Date Received</label>
                  <input type="date"/>
              </div>          
              <div className="modal-deliver">
                  <label className="modal-label">Rescalling</label>
              </div>   
              <p className="modal-rescalling">The recommend weight should be between 10 - 30 kg</p>  
              <div className="modal-deliver">
                  <label className="modal-label">Before Scalling</label>
                  <span>5 kg</span>
              </div>
              <div className="modal-deliver">
                  <label className="modal-label">After Scalling</label>
                  <input 
                  type="text"
                  placeholder="kg"
                  className="input-right-placeholder"                                
                  />
              </div>
              <div className="modal-deliver">
                  <label className="modal-label">Notes</label>
              </div>
              <div className="modal-notes">
                <textarea className="note-field" />
              </div>
            </div>
            </>
          )}
        </div>
        <div className="modal-footer">
          <button onClick={onConfirm} className="confirm-button">{confirmTitle}</button>
        </div>
      </div>
    </div>
  );
};

export default StepPopUp;
