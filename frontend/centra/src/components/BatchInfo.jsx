import React from 'react';
import { Paper, Typography, Button } from '@material-ui/core';
import '../App.css';

const BatchInfo = () => {
  const batches = [
    { date: '14th January 2024', status: 'being delivered', location: 'BINUS FX HUB' },
    { date: '13th January 2024', status: 'being delivered', location: 'Senayan City HUB' },
    { date: '12th January 2024', status: 'has arrived', location: 'XYZ' },
    { date: '11th January 2024', status: 'has arrived', location: 'XYZ' }
  ];

  return (
    <Paper style={{ padding: '20px', backgroundColor: '#CEDDC2', color: 'black', borderRadius: '16px'}}> 
      <Typography variant="h6" style={{fontWeight: 'bold', marginBottom: '1%'}}>
        Recent Shipment Progress
        <Button variant="text" color="inherit" style={{ float: 'right' }}>
          See all
        </Button>
      </Typography>
      {batches.map((batch, index) => (
        <Paper key={index} style={{ padding: '10px', marginBottom: '10px', backgroundColor: '#F8F9FA', color: 'black', borderRadius: '10px' }}>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            Batch {batch.date} is {batch.status}
          </Typography>
          <Typography variant="body2">
            It is currently at {batch.location}
          </Typography>
        </Paper>
      ))}
    </Paper>
  );
};

export default BatchInfo;
