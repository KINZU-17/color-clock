import { useState, useEffect } from 'react';
import { format } from 'date-fns'; // Task 2, Step 2: Import date-fns
import './App.css';

function App() {
  // We use 'useState' to store the current time
  const [currentTime, setCurrentTime] = useState(new Date());

  // 'useEffect' acts like a timer that starts when the page loads
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date()); // Update time every 1 second
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer if we leave the page
  }, []);

  return (
    <div className="container">
      <div className="clock-wrapper">
        <h1>Digital Dashboard</h1>
        
        {/* Using date-fns to format the output */}
        <p className="time">
          {format(currentTime, 'pp')} 
        </p>
        
        <p className="date">
          {format(currentTime, 'PPPP')}
        </p>
      </div>
    </div>
  );
}

export default App;