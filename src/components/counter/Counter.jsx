import React, { useEffect, useState } from 'react';

const Counter = () => {
   const [count, setCount] = useState(0)
   // stale state
   // const handleIncrement = () => {
   //    setTimeout(() => {
   //       setCount(prev => prev + 1)
   //    }, 1000)
   // }
   const [info, setInfo] = useState({
      firstName: 'John',
      lastName: 'Cena',
   })
   useEffect(() => {
      console.log('from inputs');
   }, [info.firstName])
   return (
      // <div className="counter">
      //    <div onClick={() => setCount(count + 1)}>Increment: {count}</div>
      // </div>
      <div className="flex gap-x-4 p-5 items-center">
         <input type="text"
            className="h-[50px]"
            name="firstName"
            value={info.firstName}
            onChange={(e) => setInfo({
               ...info,
               firstName: e.target.value
            })}
         />
      </div>
   );
};

export default Counter;