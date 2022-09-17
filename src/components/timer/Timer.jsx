import React, { useState } from 'react';
import { useEffect } from 'react';

const Timer = () => {
   const [message, setMessage] = useState("Hello")
   useEffect(() => {
      const timerId = setInterval(() => {
         console.log(message)
      }, 2000)

      return () => {
         console.log("Clean-up runs")
         clearInterval(timerId)
      }
   }, [message])
   return (
      <div>
         <input type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
         />
      </div>
   );
};

export default Timer;