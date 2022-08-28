import React from 'react';
import Cell from './Cell';

const Board = (props) => {
   return (
      <div className="game-board">
         {props.cells.map((item, index) => (
            <Cell
               key={index}
               onClick={() => props.onClick(index)}
               value={item}
               className={item !== null && item === 'X' ? 'x-turn' : item === 'O' ? 'o-turn' : ''}
            />
         ))}
      </div>
   );
};

export default Board;