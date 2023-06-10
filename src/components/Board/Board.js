import React, { useEffect, useState } from 'react';
import { BoardContainer } from './BoardStyles';
import Cell from '../Cell/Cell';
import { randomizeMines } from '../../functions/RandomizeMines';
import { updateValue } from '../../functions/UpdateValue';
import { createBoard } from '../../functions/CreateBoard';
import GameOver from '../GameOver/GameOver';
import { handleAll } from '../../functions/HandleAll';

const Board = ({ height, width, mines, mineCount, gameOver, handleGameOver, mineClicked, handleMineClicked, setMineCount, difficulty, setMinesRemaining, minesRemaining, toggle }) => {

  const [grid, setGrid] = useState([]);
  const [checkArr, setCheckArr] = useState([]);

  const mineLocation = [];

  const board = [];

  useEffect(() => {
    //Creates grid on initial render
    createBoard(width, height, board, setGrid)
    //Randomizes mine locations
    randomizeMines(width, height, mines, board, mineLocation)
    //Increases cell value based on local mines
    updateValue(width, height, board)
  }, [height, width, mines])

  useEffect(() => {
    if(minesRemaining === 0 & mineCount === 0) {
      handleAll(grid)
    }
  })

  const handleReset = () => {
    createBoard(width, height, board, setGrid);
    randomizeMines(width, height, mines, board, mineLocation);
    updateValue(width, height, board)
    handleGameOver(true);
    handleMineClicked(false);
    setMineCount(mines);
    setMinesRemaining(mines);
    setCheckArr([]);
  }

  const dimenstions = difficulty === "beginner" ? "25px" : difficulty === "intermediate" ? "20px" : "18px";

  return (
    <BoardContainer 
    style={{ gridTemplateColumns: `repeat(${height}, ${dimenstions}`, gridTemplateRows: `repeat(${width}, ${dimenstions}` }}
    mineClicked={mineClicked}
    >
      {
        grid.map((row) => {
          return row.map((item, index) => {
            return (
              <Cell
                key={index}
                item={item}
                index={index}
                setGrid={setGrid}
                grid={grid}
                width={width}
                height={height}
                gameOver={gameOver}
                handleGameOver={handleGameOver}
                handleMineClicked={handleMineClicked}
                setMineCount={setMineCount}
                checkArr={checkArr}
                setCheckArr={setCheckArr}
                difficulty={difficulty}
                setMinesRemaining={setMinesRemaining}
                toggle={toggle}
              />
            )
          })
        })
      }
      <GameOver mineClicked={mineClicked} handleReset={handleReset} minesRemaining={minesRemaining} mineCount={mineCount}/>
    </BoardContainer>
  )
}

export default Board