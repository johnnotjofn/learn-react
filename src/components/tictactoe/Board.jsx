import React from 'react';
import { calculateWinner } from '../../helper/calculateWinner';
import Cell from './Cell';

const Board = (props) => {
   return (
      <div className="game-board">
         {props.cells.map((item, index) => (
            <Cell
               key={index}
               onClick={() => props.onClick(index)}
               value={item}
            />
         ))}
      </div>
   );
};

export default Board;