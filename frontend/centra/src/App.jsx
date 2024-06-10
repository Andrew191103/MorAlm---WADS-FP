import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import CustomChart from './components/Chart';
import BatchInfo from './components/BatchInfo';
import BatchProgress from './components/BatchProgress';
import CheckBP from './components/Button'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="main-content">
              <div className="chart-section">
                <CustomChart />
              </div>
              <div className="dashboard" >
                <div className="progress-section">
                  <ProgressBar value={70}/>
                  <CheckBP />
                </div>
                <div className="batch-info-section">
                  <BatchInfo />
                </div>
              </div>
            </main>
          } />
          <Route path="/batch-progress" element={<BatchProgress />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
