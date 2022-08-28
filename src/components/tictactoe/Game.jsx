import React, { useReducer, useState } from 'react';
import { calculateWinner } from '../../helper/calculateWinner';
import Board from './Board';
import "./GameStyles.scss"

const initialState = {
   board: Array(9).fill(null),
   xIsNext: true,
}

const gameReducer = (state, action) => {
   switch (action.type) {
      case 'CLICK': {
         const { board, xIsNext } = state
         const { index, winner } = action.payload
         if (winner || board[index]) return state

         const nextState = JSON.parse(JSON.stringify(state))
         nextState.board[index] = xIsNext ? 'X' : 'O'
         nextState.xIsNext = !xIsNext

         return nextState
      }
      case 'RESET': {
         const nextState = JSON.parse(JSON.stringify(state))
         nextState.board = Array(9).fill(null)
         nextState.xIsNext = true
         return nextState
      }
      default:
         console.log('Error')
         break;
   }
   return state
}

const Game = () => {
   const [state, dispatch] = useReducer(gameReducer, initialState)
   // const [board, setBoard] = useState(Array(9).fill(null))
   // const [xIsNext, setXIsNext] = useState(true)

   const winner = calculateWinner(state.board)

   const handleClick = (index) => {
      // let boardCopy = [...state.board]
      // if (winner || boardCopy[index]) return

      dispatch({
         type: 'CLICK',
         payload: {
            index,
            winner
         }
      })
      // boardCopy[index] = xIsNext ? 'X' : 'O'
      // setBoard(boardCopy)
      // setXIsNext(prev => !prev)
   }

   const handleResetGame = () => {
      // setBoard(Array(9).fill(null))
      dispatch({
         type: 'RESET',
      })
   }
   return (
      <div className="game">
         <Board cells={state.board} onClick={handleClick} />
         <button className="btn-reset" onClick={handleResetGame}>Reset</button>
         <p>{winner ? `The winner is ${!state.xIsNext ? 'X' : 'O'}` : ''}</p>
      </div>
   );
};

export default Game;