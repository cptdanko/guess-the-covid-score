import './App.css';
import React from 'react';
import DailyEntryForm from './components/DailyEntryForm';
import DailyPredictions from './components/DailyPredictions';

function App() {
  
  return (
    <div className="App">
      <DailyPredictions />
      <div style={{paddingTop: '20px'}}>
        <DailyEntryForm />
      </div>
    </div>
  );
}

export default App;
