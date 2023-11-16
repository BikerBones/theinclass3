// Counter.js
import React, { useState } from "react";
import "./Counter.css"; // Import the CSS file

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <div className="counter-value">{count}</div>
      <button onClick={decreaseCount}>-</button>
      <button onClick={increaseCount}>+</button>
    </div>
  );
};

export default Counter;
