import React, { useState, useEffect } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => clearInterval(interval); // Cleanup interval
  }, [isRunning]);

  const startCounter = () => setIsRunning(true);
  const stopCounter = () => setIsRunning(false);

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter</h1>
      <h2 className="counter-value">{count}</h2>
      <div className="button-container">
        <button
          className="button"
          onClick={startCounter}
          disabled={isRunning}
        >
          Start
        </button>
        <button
          className="button"
          onClick={stopCounter}
          disabled={!isRunning}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default Counter;
