import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

// All dummy data
const data = [
  { day: 0, weight: 25000 },
  { day: 1, weight: 50000 },
  { day: 2, weight: 75000 },
  { day: 3, weight: 60000 },
  { day: 4, weight: 40000 },
  { day: 5, weight: 65000 },
  { day: 6, weight: 70000 },
];

const styles = {
  chartContainer: {
    width: '90%',
    height: '300px',
    margin: '0 auto', // Center the chart horizontally
  },
  chartTitle: {
    textAlign: 'left',
    marginBottom: '1%', 
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '35px',
  },
  yAxisLabel: {
    textAnchor: 'middle',
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: 'bold'
  },
};

const Chart = () => (
  <div style={styles.chartContainer}>
    <h2 style={styles.chartTitle}>Centra [Location]</h2>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 50, right: 30, left: 40, bottom: 0 }} // Adjust left and right margins
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" label={{ value: 'Days in a Week', position: 'insideBottom', offset: -3, style: styles.yAxisLabel }} />
        <YAxis label={{ value: 'Total Weight of Leaves (kg)', angle: -90, position: 'insideLeft', offset: -20, style: styles.yAxisLabel }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="weight" stroke="#467E18" strokeWidth={3} activeDot={{ r: 8, strokeWidth: 6 }} /> {/* Increase the line thickness */}
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default Chart;
