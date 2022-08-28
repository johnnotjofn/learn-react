import React from 'react';
import { CardData } from './CardData';

const CardTailwind = (props) => {
   const amountClasses = `text-lg font-bold text-transparent ${props.primary ? 'bg-primary-gradient' : 'bg-secondary-gradient'} bg-clip-text`
   return (
      <>
         {
            CardData && CardData.length &&
            CardData.map((item, index) => (
               <div className="relative w-[400px]" key={item.id}>
                  <div className="w-full h-[400px] rounded-lg">
                     <img
                        src={item.background}
                        alt="background"
                        className="block w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="absolute left-2/4 bottom-0 -translate-x-2/4 translate-y-2/4 bg-white z-10 w-[calc(100%-36px)] rounded-3xl p-5">
                     <div className="flex justify-between items-center mb-[30px]">
                        <div className="flex justify-center items-center gap-x-3">
                           <img
                              src={item.avatar}
                              alt="avatar"
                              className="w-[30px] h-[30px] object-cover rounded-full shrink-0" />
                           <span className="font-light text-base text-[#333]">{item.username}</span>
                        </div>
                        <div className="flex justify-center items-center gap-x-3">
                           <img src="/coolicon.svg" alt="heart" />
                           <span className="font-medium text-base">{item.interact}</span>
                        </div>
                     </div>
                     <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">{item.title}</h3>
                        <span className={amountClasses}>{item.amount} PSL</span>
                     </div>
                  </div>
               </div>
            ))
         }
      </>
   );
};

export default CardTailwind;