import React, { useState } from 'react';
import { calculateWinner } from '../../helper/calculateWinner';
import Board from './Board';
import "./GameStyles.scss"

const Game = () => {
   const [board, setBoard] = useState(Array(9).fill(null))
   const winner = calculateWinner(board)
   const handleClick = (value) => {
   }
   return (
      <div>
         <Board cells={board} onClick={handleClick} />
      </div>
   );
};

export default Game; <Board />