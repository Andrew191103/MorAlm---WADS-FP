import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';

const CheckBP = () => {
  const navigate = useNavigate(); 

  const navigateToBatchProgress = () => {
    navigate('/batch-progress'); 
  };

  return (
    <Button variant="contained" onClick={navigateToBatchProgress} style={{ marginTop: '20px', backgroundColor: '#467e18', color: 'white'}}>
      Check Batch Progress
    </Button>
  );
};

export default CheckBP;
