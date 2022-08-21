import React, { useState } from 'react';
import "./ToggleStyles.scss"

const Toggle = () => {
   const [on, setOn] = useState(false)
   const handleToggle = () => {
      setOn(prev => !prev)
   }
   return (
      <div>
         {on ? "ON" : "OFF"}
         <div
            className={`toggle ${on ? "active" : ""}`}
            onClick={handleToggle}
         >
            <div className={`spinner ${on ? "active" : ""}`}></div>
         </div>
      </div>
   );
};

export default Toggle;