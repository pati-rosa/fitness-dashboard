import React, { useState, useEffect } from 'react';
import './App.css';
import WorkoutChart from './components/WorkoutProgressChart';
import DailyGoalsChecklist from './components/DailyGoalsChecklist';
import QuickActions from './components/QuickActionsWithAnimations';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
   <div className="container-outter">
     <div className="header">
        <h1>Dashboard</h1>
        <button onClick={toggleTheme}>
          Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
      <div className="container">
        <div className="WorkoutChart">
          <WorkoutChart />
        </div>
        <div className="DailyGoalsChecklist">
          <DailyGoalsChecklist />
        </div>
        <div className="QuickActions">
          <QuickActions />
        </div>
      </div>
   </div>
  );
};

export default App;