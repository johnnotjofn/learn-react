import React, { useState } from 'react';

const Counter = () => {
   const [count, setCount] = useState(0)
   // stale state
   const handleIncrement = () => {
      setTimeout(() => {
         setCount(prev => prev + 1)
      }, 1000)
   }
   return (
      <div className="counter">
         <div onClick={handleIncrement}>Increment: {count}</div>
      </div>
   );
};

export default Counter;